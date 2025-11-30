// EmailJS Configuration
// Get your credentials from https://dashboard.emailjs.com/admin/account

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (from Account page)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Your Service ID (from Email Services page)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'contact_service',
  
  // Your Template ID (from Email Templates page)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'contact_form',
};

// Template Parameters Interface
export interface EmailTemplateParams {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget: string;
  message: string;
  time?: string;
}

