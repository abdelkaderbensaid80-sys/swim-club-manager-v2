"use client";
import { useFormState } from "react-dom";
import { handleOnboarding } from "./actions";

// صاوبنا هاد الحالة البدئية باش TypeScript يرتاح
const initialState = {
  error: "",
};

export default function OnboardingPage() {
  // استعملنا initialState اللي عرفنا الفوق
  const [state, formAction] = useFormState(handleOnboarding, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4" dir="rtl">
      <form action={formAction} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border">
        <h1 className="text-2xl font-bold mb-6 text-center">إعداد النادي الرياضي</h1>
        <input type="hidden" name="mode" value="create" />
        
        <div className="space-y-4">
          <input name="name" placeholder="اسم نادي السباحة" className="w-full p-3 border rounded outline-blue-500" required />
          <input name="city" placeholder="المدينة" className="w-full p-3 border rounded outline-blue-500" required />
          
          {/* كانديرو Check واش كاين شي message في الـ error */}
          {state?.error && (
            <p className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-100">
              {state.error}
            </p>
          )}
          
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-bold transition-colors">
            إنشاء النادي
          </button>
        </div>
      </form>
    </div>
  );
}
