'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

// تسجيل دخول
export async function signIn(email: string, password: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  redirect('/dashboard');
}

// تسجيل خروج
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}

// إنشاء حساب + حفظ في Profiles
export async function completeSignup(email: string, password: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  const user = data.user;

  if (user) {
    const { error: profileError } = await supabase
      .from('Profiles') // مهم P كبيرة
      .insert({
        id: user.id,
        email: user.email,
        role: 'client',
      });

    if (profileError) {
      return { error: profileError.message };
    }
  }

  redirect('/dashboard');
}