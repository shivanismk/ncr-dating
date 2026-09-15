export interface Profile {
  id?: number;

  name: string;

  state: string;

  city: string;

  category: string;

  phone: string;

  whatsapp: string;

  email?: string;

  address?: string;

  description?: string;

  image?: string;

  status?: boolean;
}