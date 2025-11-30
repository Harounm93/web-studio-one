// TypeScript interfaces for CMS content

export interface HeroStat {
  label: string;
  value: string;
}

export interface Hero {
  headline: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
  stats: HeroStat[];
}

export interface TeamStat {
  title: string;
  description: string;
  color: string;
}

export interface WhyTrust {
  title: string;
  desc: string;
}

export interface About {
  title: string;
  subtitle: string;
  missionTitle: string;
  missionPara1: string;
  missionPara2: string;
  missionPara3: string;
  teamStats: TeamStat[];
  whyTrust: WhyTrust[];
}

export interface OfficeHours {
  day: string;
  hours: string;
}

export interface Contact {
  email: string;
  phone: string;
  address1: string;
  address2: string;
  address3: string;
  hours: OfficeHours[];
}

export interface SiteSettings {
  hero: Hero;
  about: About;
  contact: Contact;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  dribbble?: string;
}

export interface CompanyInfo {
  companyName: string;
  tagline: string;
  social: SocialLinks;
}

export interface Portfolio {
  title: string;
  category: string;
  description: string;
  results: string[];
  colorFrom: string;
  colorTo: string;
  link: string;
  image?: string;
  order: number;
}

export interface Service {
  title: string;
  icon: string;
  description: string;
  features: string[];
  order: number;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar?: string;
  order: number;
}

export interface Pricing {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  order: number;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface CMSContent {
  siteSettings: SiteSettings;
  companyInfo: CompanyInfo;
  portfolio: Portfolio[];
  services: Service[];
  testimonials: Testimonial[];
  pricing: Pricing[];
  process: ProcessStep[];
}

