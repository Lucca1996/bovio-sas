// src/app/types/response.ts
import type { Product } from '@/payload-types';

export interface ResponseType {
  loading: boolean;
  result: Product[] | null; // Changed to Product[] | null
  error?: any; // Optional error property
}
