
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features?: string[];
  iconName: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface BeforeAfterImage {
  id: string;
  before: string;
  after: string;
  label: string;
}
