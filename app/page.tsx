import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white overflow-hidden relative" dir="rtl">
      {/* خلفية فنية تشبه حركة الماء */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>

      <nav className="p-6 flex justify-between items-center relative z-10">
        <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          MySwimPro <span className="text-sm font-light text-slate-400">v2</span>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          درب <span className="text-blue-400">بذكاء</span><br/>
          سير <span className="text-cyan-400">بسرعة</span>
        </h1>
        <p className="text-slate-400 text-xl max-w-2xl mb-10 leading-relaxed">
          المنصة المتكاملة لمدربي السباحة في المغرب. تدبير الحصص، تتبع أداء السباحين، وإدارة الأندية بضغطة زر واحدة.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Link 
            href="/onboarding" 
            className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-blue-500/20 transition-all hover:scale-105"
          >
            {"ابدأ الآن مجاناً"}
          </Link>
          <Link 
            href="/login" 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold text-xl border border-white/20 transition-all"
          >
            {"تسجيل الدخول"}
          </Link>
        </div>
      </main>
    </div>
  );
}
