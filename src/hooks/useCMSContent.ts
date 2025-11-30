// React hook for loading CMS content
import { useState, useEffect } from 'react';
import { loadAllContent } from '@/lib/cms-content';
import type { CMSContent } from '@/types/cms';

interface UseCMSContentReturn {
  content: CMSContent | null;
  isLoading: boolean;
  error: Error | null;
}

// In-memory cache for content
let contentCache: CMSContent | null = null;
let cachePromise: Promise<any> | null = null;

export function useCMSContent(): UseCMSContentReturn {
  const [content, setContent] = useState<CMSContent | null>(contentCache);
  const [isLoading, setIsLoading] = useState(!contentCache);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // If we already have cached content, use it
    if (contentCache) {
      setContent(contentCache);
      setIsLoading(false);
      return;
    }

    // If there's an ongoing load, wait for it
    if (cachePromise) {
      cachePromise
        .then((data) => {
          setContent(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
      return;
    }

    // Start loading content
    setIsLoading(true);
    cachePromise = loadAllContent();

    cachePromise
      .then((data) => {
        const cmsContent: CMSContent = {
          siteSettings: data.siteSettings || {
            hero: {
              headline: '',
              description: '',
              primaryCTA: '',
              secondaryCTA: '',
              stats: []
            },
            about: {
              title: '',
              subtitle: '',
              missionTitle: '',
              missionPara1: '',
              missionPara2: '',
              missionPara3: '',
              teamStats: [],
              whyTrust: []
            },
            contact: {
              email: '',
              phone: '',
              address1: '',
              address2: '',
              address3: '',
              hours: []
            }
          },
          companyInfo: data.companyInfo || {
            companyName: 'Web Studio',
            tagline: '',
            social: {}
          },
          portfolio: data.portfolio || [],
          services: data.services || [],
          testimonials: data.testimonials || [],
          pricing: data.pricing || [],
          process: data.process || []
        };

        contentCache = cmsContent;
        setContent(cmsContent);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load CMS content:', err);
        setError(err);
        setIsLoading(false);
        cachePromise = null;
      });
  }, []);

  return {
    content,
    isLoading,
    error
  };
}

// Helper hook to get individual sections
export function useSiteSettings() {
  const { content, isLoading, error } = useCMSContent();
  return {
    siteSettings: content?.siteSettings || null,
    isLoading,
    error
  };
}

export function usePortfolio() {
  const { content, isLoading, error } = useCMSContent();
  return {
    portfolio: content?.portfolio || [],
    isLoading,
    error
  };
}

export function useServices() {
  const { content, isLoading, error } = useCMSContent();
  return {
    services: content?.services || [],
    isLoading,
    error
  };
}

export function useTestimonials() {
  const { content, isLoading, error } = useCMSContent();
  return {
    testimonials: content?.testimonials || [],
    isLoading,
    error
  };
}

export function usePricing() {
  const { content, isLoading, error } = useCMSContent();
  return {
    pricing: content?.pricing || [],
    isLoading,
    error
  };
}

export function useProcess() {
  const { content, isLoading, error } = useCMSContent();
  return {
    process: content?.process || [],
    isLoading,
    error
  };
}

