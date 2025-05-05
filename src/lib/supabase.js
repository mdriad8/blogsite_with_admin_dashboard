import { createClient } from '@supabase/supabase-js';

// Environment variables (for Vite projects, still works as JSX-compatible JS)
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to check if current user is an admin
export async function isAdmin() {
  const {
    data: userData,
    error: userError
  } = await supabase.auth.getUser();

  const userId = userData?.user?.id;

  if (!userId || userError) return false;

  const { data, error } = await supabase
    .from('user_roles')
    .select('role')
    .eq('id', userId)
    .single();

  if (error || !data) return false;

  return data.role === 'admin';
}
