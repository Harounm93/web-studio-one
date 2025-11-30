// CMS Content Loaders
import matter from 'gray-matter';
import type {
  SiteSettings,
  CompanyInfo,
  Portfolio,
  Service,
  Testimonial,
  Pricing,
  ProcessStep
} from '@/types/cms';

// Helper function to fetch and parse markdown files
async function loadMarkdownFile(path: string): Promise<any> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }
    const text = await response.text();
    const { data } = matter(text);
    return data;
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
    return null;
  }
}

// Load Site Settings
export async function loadSiteSettings(): Promise<SiteSettings | null> {
  try {
    const data = await loadMarkdownFile('/content/settings/site-settings.md');
    if (!data) return null;
    
    return {
      hero: data.hero || {},
      about: data.about || {},
      contact: data.contact || {},
    } as SiteSettings;
  } catch (error) {
    console.error('Error loading site settings:', error);
    return null;
  }
}

// Load Company Info
export async function loadCompanyInfo(): Promise<CompanyInfo | null> {
  try {
    const data = await loadMarkdownFile('/content/settings/company-info.md');
    if (!data) return null;
    
    return {
      companyName: data.companyName || 'Web Studio',
      tagline: data.tagline || '',
      social: data.social || {},
    } as CompanyInfo;
  } catch (error) {
    console.error('Error loading company info:', error);
    return null;
  }
}

// Load Portfolio Items
export async function loadPortfolio(): Promise<Portfolio[]> {
  try {
    const portfolioFiles = ['corefit.md', 'maple-mug.md'];
    const portfolioPromises = portfolioFiles.map(file =>
      loadMarkdownFile(`/content/portfolio/${file}`)
    );
    
    const portfolioData = await Promise.all(portfolioPromises);
    const portfolio = portfolioData
      .filter(item => item !== null)
      .map(item => ({
        title: item.title || '',
        category: item.category || '',
        description: item.description || '',
        results: item.results || [],
        colorFrom: item.colorFrom || 'blue-500',
        colorTo: item.colorTo || 'purple-500',
        link: item.link || '#',
        image: item.image,
        order: item.order || 0,
      })) as Portfolio[];
    
    return portfolio.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading portfolio:', error);
    return [];
  }
}

// Load Services
export async function loadServices(): Promise<Service[]> {
  try {
    const serviceFiles = [
      '01-website-development.md',
      '02-website-design.md',
      '03-web-applications.md',
      '04-dashboards.md',
      '05-branding.md',
      '06-support.md'
    ];
    
    const servicePromises = serviceFiles.map(file =>
      loadMarkdownFile(`/content/services/${file}`)
    );
    
    const serviceData = await Promise.all(servicePromises);
    const services = serviceData
      .filter(item => item !== null)
      .map(item => ({
        title: item.title || '',
        icon: item.icon || 'Code2',
        description: item.description || '',
        features: item.features || [],
        order: item.order || 0,
      })) as Service[];
    
    return services.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading services:', error);
    return [];
  }
}

// Load Testimonials
export async function loadTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonialFiles = [
      'sarah-mitchell.md',
      'emily-rodriguez.md',
      'david-park.md'
    ];
    
    const testimonialPromises = testimonialFiles.map(file =>
      loadMarkdownFile(`/content/testimonials/${file}`)
    );
    
    const testimonialData = await Promise.all(testimonialPromises);
    const testimonials = testimonialData
      .filter(item => item !== null)
      .map(item => ({
        name: item.name || '',
        role: item.role || '',
        company: item.company || '',
        quote: item.quote || '',
        rating: item.rating || 5,
        avatar: item.avatar,
        order: item.order || 0,
      })) as Testimonial[];
    
    return testimonials.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading testimonials:', error);
    return [];
  }
}

// Load Pricing
export async function loadPricing(): Promise<Pricing[]> {
  try {
    const pricingFiles = ['starter.md', 'professional.md', 'enterprise.md'];
    
    const pricingPromises = pricingFiles.map(file =>
      loadMarkdownFile(`/content/pricing/${file}`)
    );
    
    const pricingData = await Promise.all(pricingPromises);
    const pricing = pricingData
      .filter(item => item !== null)
      .map(item => ({
        name: item.name || '',
        price: item.price || '',
        description: item.description || '',
        features: item.features || [],
        popular: item.popular || false,
        ctaText: item.ctaText || 'Get Started',
        order: item.order || 0,
      })) as Pricing[];
    
    return pricing.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading pricing:', error);
    return [];
  }
}

// Load Process Steps
export async function loadProcess(): Promise<ProcessStep[]> {
  try {
    const processFiles = [
      '01-discovery.md',
      '02-design.md',
      '03-development.md',
      '04-launch.md',
      '05-support.md'
    ];
    
    const processPromises = processFiles.map(file =>
      loadMarkdownFile(`/content/process/${file}`)
    );
    
    const processData = await Promise.all(processPromises);
    const process = processData
      .filter(item => item !== null)
      .map(item => ({
        step: item.step || 0,
        title: item.title || '',
        description: item.description || '',
        icon: item.icon || 'Search',
        order: item.order || 0,
      })) as ProcessStep[];
    
    return process.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading process:', error);
    return [];
  }
}

// Load all CMS content at once
export async function loadAllContent() {
  const [
    siteSettings,
    companyInfo,
    portfolio,
    services,
    testimonials,
    pricing,
    process
  ] = await Promise.all([
    loadSiteSettings(),
    loadCompanyInfo(),
    loadPortfolio(),
    loadServices(),
    loadTestimonials(),
    loadPricing(),
    loadProcess()
  ]);

  return {
    siteSettings,
    companyInfo,
    portfolio,
    services,
    testimonials,
    pricing,
    process
  };
}

