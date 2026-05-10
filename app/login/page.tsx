"use client";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleLogin = async () => {
    // هادي غاتصيفط ليك Magic Link للـ Email ديالك
    const email = prompt("أدخل بريدك الإلكتروني:");
    if (email) {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: `${window.location.origin}/auth/callback` }
      });
      if (error) alert(error.message);
      else alert("تفقد بريدك الإلكتروني لتسجيل الدخول!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <button onClick={handleLogin} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl">
        تسجيل الدخول عبر البريد الإلكتروني
      </button>
    </div>
  );
}
