"use client";
import { useFormState } from "react-dom";
import { handleOnboarding } from "./actions";

const initialState = { error: "" };

export default function OnboardingPage() {
  const [state, formAction] = useFormState(handleOnboarding, initialState);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 flex items-center justify-center p-6" dir="rtl">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white relative overflow-hidden">
        {/* لمسة فنية: خط مائي في الأعلى */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-500"></div>
        
        <div className="text-center mb-8">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
             <span className="text-3xl">🏊‍♂️</span>
          </div>
          <h1 className="text-3xl font-extrabold text-blue-900 tracking-tight">إعداد النادي</h1>
          <p className="text-slate-500 mt-2">خطوة واحدة تفصلك عن تنظيم فريقك</p>
        </div>

        <form action={formAction} className="space-y-5">
          <input type="hidden" name="mode" value="create" />
          
          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2 mr-1">اسم النادي الرياضي</label>
            <input 
              name="name" 
              placeholder="مثلاً: نادي أكاديمية السباحة" 
              className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-800"
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-900 mb-2 mr-1">المدينة</label>
            <input 
              name="city" 
              placeholder="الدار البيضاء، أكادير..." 
              className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-800"
              required 
            />
          </div>
          
          {state?.error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100 animate-pulse">
              ⚠️ {state.error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95"
          >
            تأكيد وإنشاء النادي
          </button>
        </form>
      </div>
    </div>
  );
}
