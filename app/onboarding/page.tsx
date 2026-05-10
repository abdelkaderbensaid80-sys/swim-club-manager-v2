"use client";
import { useFormState } from "react-dom";
import { handleOnboarding } from "./actions";

export default function OnboardingPage() {
  const [state, formAction] = useFormState(handleOnboarding, { error: "" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 flex items-center justify-center p-6" dir="rtl">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] w-full max-w-md border border-white/50">
        <div className="text-center mb-10">
          <div className="bg-blue-600 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 rotate-3 shadow-lg">
             <span className="text-4xl">🏊‍♂️</span>
          </div>
          <h1 className="text-3xl font-black text-blue-900">إعداد النادي</h1>
          <p className="text-slate-500 mt-2">نظم فريقك السباح بطريقة احترافية</p>
        </div>

        <form action={formAction} className="space-y-6">
          <input type="hidden" name="mode" value="create" />
          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-900 mr-2">اسم النادي الرياضي</label>
            <input 
              name="name" 
              className="w-full p-4 bg-white border-2 border-blue-50 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all outline-none"
              placeholder="مثلاً: نادي المحيط للسباحة"
              required 
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-blue-900 mr-2">المدينة</label>
            <input 
              name="city" 
              className="w-full p-4 bg-white border-2 border-blue-50 rounded-2xl focus:border-blue-500 focus:ring-0 transition-all outline-none"
              placeholder="الدار البيضاء"
              required 
            />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 transition-all active:scale-95">
            تأكيد وإنشاء النادي
          </button>
        </form>
      </div>
    </div>
  );
}
