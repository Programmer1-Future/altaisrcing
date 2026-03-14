import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Replace these with your Supabase project URL and anon key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only create the client if credentials are provided — prevents crash on empty strings
let supabase: SupabaseClient | null = null;
if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

export type ContactFormData = {
  id?: string;
  created_at?: string;
  name: string;
  company: string;
  email: string;
  message: string;
  status?: 'new' | 'read' | 'contacted';
};