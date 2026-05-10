import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    // تحويل الكود لجلسة دخول
    await supabase.auth.exchangeCodeForSession(code);
  }

  // التوجيه لصفحة الـ onboarding بعد النجاح
  return NextResponse.redirect(new URL('/onboarding', request.url));
}
