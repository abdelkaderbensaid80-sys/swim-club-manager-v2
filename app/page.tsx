"use client";

import { useFormState } from "react-dom";
import { handleOnboarding } from "./actions";

// صاوبنا الحالة البدئية هنا باش TypeScript يعرف أن error خاصو يكون string
const initialState = {
  error: "",
};

export default function OnboardingPage() {
  // استعملنا initialState اللي هي عبارة عن { error: "" }
  const [state, formAction] = useFormState(handleOnboarding, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-50" dir="rtl">
      <form action={formAction} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h1 className="text-2xl font-bold mb-2 text-center text-slate-800">إعداد النادي الرياضي</h1>
        <p className="text-slate-500 text-center mb-8">أدخل معلومات ناديك للبدء</p>
        
        <input type="hidden" name="mode" value="create" />
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">اسم النادي</label>
            <input 
              name="name" 
              placeholder="مثلاً: نادي المحيط للسباحة" 
              className="w-full p-3 border rounded-xl outline-blue-500 bg-slate-50" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">المدينة</label>
            <input 
              name="city" 
              placeholder="مثلاً: الدار البيضاء" 
              className="w-full p-3 border rounded-xl outline-blue-500 bg-slate-50" 
              required 
            />
          </div>
          
          {/* كانديرو Check واش كاين شي ميساج في الـ error */}
          {state?.error && (
            <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
              {state.error}
            </div>
          )}
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-100"
          >
            تأكيد وإنشاء النادي
          </button>
        </div>
      </form>
    </div>
  );
}
