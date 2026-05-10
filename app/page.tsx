import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-right" dir="rtl">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">MySwimPro V2</h1>
        
        {/* النص العربي درتو وسط {} باش React يقبلو */}
        <Link 
          href="/onboarding" 
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg transition-transform hover:scale-105"
        >
          {"ابدأ إعداد النادي"}
        </Link>
      </div>
    </div>
  );
}
