"use client";
import { useFormState } from "react-dom";
import { handleOnboarding } from "./actions";

export default function OnboardingPage() {
  const [state, formAction] = useFormState(handleOnboarding, { error: null });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4" dir="rtl">
      <form action={formAction} className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border">
        <h1 className="text-2xl font-bold mb-6 text-center">إعداد النادي الرياضي</h1>
        <input type="hidden" name="mode" value="create" />
        <div className="space-y-4">
          <input name="name" placeholder="اسم نادي السباحة" className="w-full p-3 border rounded" required />
          <input name="city" placeholder="المدينة" className="w-full p-3 border rounded" required />
          {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded font-bold">إنشاء النادي</button>
        </div>
      </form>
    </div>
  );
}
