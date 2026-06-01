'use server';

import { cookies } from 'next/headers';

export async function setThemeCookie(theme: 'dark' | 'light') {
  const cookieStore = await cookies();
  cookieStore.set('theme', theme, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
  });
}
