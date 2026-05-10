import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-right" dir="rtl">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-black text-blue-900">MySwimPro V2</h1>
        <p className="text-xl text-slate-600">أهلاً بك كوتش! ابدأ بتنظيم ناديك الرياضي الآن.</p>
        
        <Link 
          href="/onboarding" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 transition-all transform hover:scale-105"
        >
          إعداد النادي (Onboarding)
        </Link>
      </div>
    </div>
  );
}
