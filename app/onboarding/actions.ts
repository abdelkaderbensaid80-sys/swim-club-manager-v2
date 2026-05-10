"use server";
import { createClient } from "@/lib/supabase";
import { redirect } from "next/navigation";

export async function handleOnboarding(prevState: any, formData: FormData) {
  const supabase = createClient();
  const mode = formData.get("mode") as string;
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "يرجى تسجيل الدخول أولاً" };

  try {
    if (mode === "create") {
      const name = formData.get("name") as string;
      const city = formData.get("city") as string;
      const { data: club, error: clubError } = await supabase
        .from("clubs")
        .insert([{ name, city, admin_id: user.id }])
        .select().single();

      if (clubError) return { error: clubError.message };
      await supabase.from("profiles").update({ club_id: club.id, role: "admin" }).eq("id", user.id);
    }
  } catch (e) {
    return { error: "حدث خطأ أثناء الحفظ" };
  }
  redirect("/dashboard");
}
