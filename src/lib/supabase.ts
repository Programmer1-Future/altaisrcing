import { createClient } from '@supabase/supabase-js';

// Replace these with your Supabase project URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactFormData = {
  id?: string;
  created_at?: string;
  name: string;
  company: string;
  email: string;
  message: string;
  status?: 'new' | 'read' | 'contacted';
};