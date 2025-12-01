// Serverless OAuth handler for Decap CMS
// This replaces Netlify's deprecated Identity OAuth service

export default async function handler(req, res) {
  const { code } = req.query;
  
  // Handle OAuth callback from GitHub
  if (code) {
    try {
      // Exchange code for token
      const tokenResponse = await fetch(
        'https://github.com/login/oauth/access_token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            client_id: process.env.OAUTH_GITHUB_CLIENT_ID,
            client_secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
            code,
          }),
        }
      );

      const data = await tokenResponse.json();

      if (data.error) {
        return res.status(400).send({
          error: data.error,
          error_description: data.error_description,
        });
      }

      // Send success message back to CMS
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Authorization Successful</title>
          </head>
          <body>
            <script>
              (function() {
                function receiveMessage(e) {
                  console.log("receiveMessage %o", e);
                  window.opener.postMessage(
                    'authorization:github:success:${JSON.stringify({
                      token: data.access_token,
                      provider: 'github'
                    })}',
                    e.origin
                  );
                  window.removeEventListener("message", receiveMessage, false);
                }
                window.addEventListener("message", receiveMessage, false);
                
                console.log("Posting message to opener");
                window.opener.postMessage(
                  "authorizing:github",
                  "*"
                );
              })();
            </script>
          </body>
        </html>
      `;

      res.status(200).send(html);
    } catch (error) {
      console.error('OAuth Error:', error);
      res.status(500).json({ error: 'Authentication failed', details: error.message });
    }
  } else {
    // Initial OAuth request - redirect to GitHub
    const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
    githubAuthUrl.searchParams.set('client_id', process.env.OAUTH_GITHUB_CLIENT_ID);
    githubAuthUrl.searchParams.set('redirect_uri', `${req.headers.origin || 'https://' + req.headers.host}/api/auth`);
    githubAuthUrl.searchParams.set('scope', 'repo,user');
    
    res.redirect(githubAuthUrl.toString());
  }
}

