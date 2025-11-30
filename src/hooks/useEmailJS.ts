import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, EmailTemplateParams } from '@/config/emailjs';

interface UseEmailJSReturn {
  sendEmail: (formData: EmailTemplateParams) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const useEmailJS = (): UseEmailJSReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Initialize EmailJS once when hook is first used
  useEffect(() => {
    emailjs.init({
      publicKey: EMAILJS_CONFIG.publicKey,
    });
  }, []);

  const sendEmail = async (formData: EmailTemplateParams): Promise<void> => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Add timestamp to the email
      const templateParams = {
        ...formData,
        time: new Date().toLocaleString(),
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams
      );

      console.log('EmailJS Success:', response.status, response.text);
      setSuccess(true);
      setIsLoading(false);
      // Important: Don't throw or return anything that could be caught as an error
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      const errorMessage = error?.text || 'Failed to send email. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
      // Re-throw to let the form handle it
      throw error;
    }
  };

  return {
    sendEmail,
    isLoading,
    error,
    success,
  };
};

