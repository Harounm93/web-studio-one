import { Helmet } from 'react-helmet-async';

export const StructuredData = () => {
  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Web Studio Digital Agency",
    "alternateName": "Web Studio",
    "url": "https://webstudiodesigns.netlify.app",
    "logo": "https://webstudiodesigns.netlify.app/favicon.svg",
    "description": "Modern digital web agency specializing in custom website design, web development, and web applications for small to mid-sized businesses.",
    "email": "digitalstudiodesigners@gmail.com",
    "telephone": "+1-234-567-890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Avenue",
      "addressLocality": "Tech District",
      "addressRegion": "CA",
      "postalCode": "94000",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.tiktok.com/@webstudio",
      "https://www.instagram.com/webstudio"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "Customer Service",
      "email": "digitalstudiodesigners@gmail.com",
      "availableLanguage": "English"
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Web Studio Digital Agency",
    "image": "https://webstudiodesigns.netlify.app/favicon.svg",
    "url": "https://webstudiodesigns.netlify.app",
    "telephone": "+1-234-567-890",
    "email": "digitalstudiodesigners@gmail.com",
    "priceRange": "£250 - £750+",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Digital Avenue",
      "addressLocality": "Tech District",
      "addressRegion": "CA",
      "postalCode": "94000",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  // Service Schema Array
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Website Development",
        "description": "Custom-built websites optimized for performance, SEO, and conversions. From landing pages to complex multi-page sites.",
        "provider": {
          "@type": "Organization",
          "name": "Web Studio Digital Agency"
        }
      },
      {
        "@type": "Service",
        "name": "Website Design",
        "description": "Beautiful, user-friendly designs that reflect your brand and engage your audience.",
        "provider": {
          "@type": "Organization",
          "name": "Web Studio Digital Agency"
        }
      },
      {
        "@type": "Service",
        "name": "Web Applications",
        "description": "Powerful, scalable web applications built with modern frameworks and technologies.",
        "provider": {
          "@type": "Organization",
          "name": "Web Studio Digital Agency"
        }
      },
      {
        "@type": "Service",
        "name": "E-Commerce Solutions",
        "description": "Complete online stores with payment processing, inventory management, and analytics.",
        "provider": {
          "@type": "Organization",
          "name": "Web Studio Digital Agency"
        }
      },
      {
        "@type": "Service",
        "name": "Branding & Identity",
        "description": "Logo design, brand guidelines, and visual identity systems that make you memorable.",
        "provider": {
          "@type": "Organization",
          "name": "Web Studio Digital Agency"
        }
      },
      {
        "@type": "Service",
        "name": "Ongoing Support",
        "description": "Continuous maintenance, updates, and optimization to keep your digital presence strong.",
        "provider": {
          "@type": "Organization",
          "name": "Web Studio Digital Agency"
        }
      }
    ]
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://webstudiodesigns.netlify.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://webstudiodesigns.netlify.app/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Portfolio",
        "item": "https://webstudiodesigns.netlify.app/#portfolio"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://webstudiodesigns.netlify.app/#contact"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

