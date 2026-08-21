export interface Address {
  id: number;
  user_id: number;
  phone: string | null;
  address: string;
  city: string;
  zip_code: string;
  country: string;
  is_default: boolean;
}

export interface AddressFormData {
  phone?: string;
  address: string;
  city: string;
  zip_code: string;
  country: string;
  is_default: boolean;
}