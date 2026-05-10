"use client";
import { useFormState } from "react-dom";
import { handleOnboarding } from "./actions";

// هادي هي النقطة المهمة: عطيناه جملة خاوية "" عوض null
const initialState = { error: "" };

export default function OnboardingPage() {
  const [state, formAction] = useFormState(handleOnboarding, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-50" dir="rtl">
      <form action={formAction} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-800">إعداد النادي الرياضي</h1>
        <input type="hidden" name="mode" value="create" />
        <div className="space-y-4">
          <input name="name" placeholder="اسم نادي السباحة" className="w-full p-3 border rounded-xl outline-blue-500" required />
          <input name="city" placeholder="المدينة" className="w-full p-3 border rounded-xl outline-blue-500" required />
          {state?.error && (
            <p className="text-red-500 text-sm bg-red-50 p-2 rounded border border-red-100">{state.error}</p>
          )}
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl font-bold transition-all">
            إنشاء النادي
          </button>
        </div>
      </form>
    </div>
  );
}
