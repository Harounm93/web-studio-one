# Cookie Banner Template

This template provides a reusable cookie consent banner implementation for all Web Studio client projects.

## Overview

We use the `react-cookie-consent` library to implement GDPR-friendly cookie consent banners. This provides a simple, customizable solution that stores user consent and only shows the banner once.

## Installation

```bash
npm install react-cookie-consent
```

## Basic Implementation

### 1. Import the Component

Add this import to your main page component (e.g., `Index.tsx`, `App.tsx`, or `Layout.tsx`):

```tsx
import CookieConsent from "react-cookie-consent";
```

### 2. Add the Banner Component

Place this component at the bottom of your page, after the footer but before the closing `</div>`:

```tsx
<CookieConsent
  location="bottom"
  buttonText="Accept"
  declineButtonText="Decline"
  enableDeclineButton
  cookieName="webStudioCookieConsent"
  style={{
    background: "linear-gradient(to right, rgb(37 99 235), rgb(29 78 216), rgb(126 34 206))",
    padding: "20px",
    alignItems: "center",
  }}
  buttonStyle={{
    background: "white",
    color: "rgb(29 78 216)",
    fontSize: "14px",
    fontWeight: "600",
    padding: "12px 32px",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    marginRight: "12px",
  }}
  declineButtonStyle={{
    background: "transparent",
    color: "white",
    fontSize: "14px",
    fontWeight: "600",
    padding: "12px 32px",
    borderRadius: "9999px",
    border: "2px solid white",
    cursor: "pointer",
  }}
  contentStyle={{
    flex: "1 0 300px",
    margin: "0 20px 0 0",
  }}
  expires={365}
  onAccept={() => {
    console.log("User accepted cookies");
  }}
  onDecline={() => {
    console.log("User declined cookies");
  }}
>
  <span style={{ fontSize: "15px", lineHeight: "1.6" }}>
    We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
  </span>
</CookieConsent>
```

## Customization Guide

### Colors and Branding

Match the banner to your client's brand by adjusting these properties:

**Background:**
```tsx
style={{
  background: "linear-gradient(to right, #color1, #color2, #color3)",
  // Or use a solid color:
  // background: "#yourColor",
}}
```

**Accept Button:**
```tsx
buttonStyle={{
  background: "#buttonBgColor",
  color: "#buttonTextColor",
  // Adjust other properties as needed
}}
```

**Decline Button:**
```tsx
declineButtonStyle={{
  background: "transparent",
  color: "#borderColor",
  border: "2px solid #borderColor",
  // Adjust other properties as needed
}}
```

### Message Content

Customize the message to fit your client's needs:

```tsx
<span style={{ fontSize: "15px", lineHeight: "1.6" }}>
  Your custom message here. Include links if needed.
</span>
```

### Cookie Duration

Change how long the consent is remembered (in days):

```tsx
expires={365}  // 1 year (default)
expires={30}   // 30 days
expires={7}    // 1 week
```

### Cookie Name

Use a unique cookie name for each project:

```tsx
cookieName="clientNameCookieConsent"
```

## Advanced Options

### Remove Decline Button (Not Recommended)

The default implementation includes both Accept and Decline buttons for full GDPR compliance. If you need to remove the decline button (not recommended), remove these props:

```tsx
<CookieConsent
  location="bottom"
  buttonText="Accept"
  // Remove: declineButtonText="Decline"
  // Remove: enableDeclineButton
  // Remove: declineButtonStyle={{ ... }}
  // Remove: onDecline={() => { ... }}
  cookieName="webStudioCookieConsent"
  // ... other props
>
  Your message here
</CookieConsent>
```

### Handle Cookie Acceptance/Decline

Use the `onAccept` and `onDecline` callbacks to control analytics and tracking:

```tsx
onAccept={() => {
  // Enable Google Analytics
  window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
  console.log("User accepted cookies - enabling analytics");
}}
onDecline={() => {
  // Disable Google Analytics
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  console.log("User declined cookies - disabling analytics");
}}
```

### Add Privacy Policy Link

Include a link to the privacy policy:

```tsx
<span style={{ fontSize: "15px", lineHeight: "1.6" }}>
  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
  <a href="/privacy-policy" style={{ textDecoration: "underline", color: "white" }}>
    Learn more
  </a>
</span>
```

### Debug Mode

For testing, you can force the banner to show every time:

```tsx
<CookieConsent
  debug={true}  // Remove this in production!
  // ... other props
>
```

## GDPR Best Practices

1. **Clear Language**: Use simple, understandable language about cookie usage
2. **Easy to Dismiss**: Make both accept and decline buttons prominent and easy to click
3. **Decline Option Included**: Our default implementation includes both Accept and Decline buttons for strict GDPR compliance
4. **Privacy Policy Link**: Always link to your full privacy policy
5. **Granular Control**: For sites with analytics/marketing cookies, consider offering granular cookie preferences
6. **No Pre-checked Boxes**: Don't assume consent - require explicit action
7. **Respect User Choice**: When a user declines, ensure you disable analytics, tracking, and non-essential cookies

## Implementation Checklist

- [ ] Install `react-cookie-consent` package
- [ ] Import the component in your main page/layout
- [ ] Customize colors to match client branding
- [ ] Update cookie message text
- [ ] Set appropriate cookie name
- [ ] Configure expiry duration
- [ ] Add privacy policy link (if applicable)
- [ ] Test on mobile and desktop
- [ ] Verify cookie is stored correctly
- [ ] Verify banner doesn't show after acceptance

## Browser Storage

The consent is stored in the browser's cookies with the name you specify. Users can clear this by:
- Clearing browser cookies manually
- Using browser privacy/incognito mode (requires re-consent each session)

## Testing

To test the banner repeatedly during development:
1. Open browser DevTools
2. Go to Application > Cookies
3. Delete the cookie with your specified name
4. Refresh the page

Or add `debug={true}` to the component (remember to remove before production).

## Additional Resources

- [react-cookie-consent Documentation](https://www.npmjs.com/package/react-cookie-consent)
- [GDPR Cookie Consent Guidelines](https://gdpr.eu/cookies/)
- [Cookie Consent Best Practices](https://www.cookiebot.com/en/cookie-consent/)

---

**Note**: This template is maintained by Web Studio and should be used as the standard for all client projects requiring cookie consent.

