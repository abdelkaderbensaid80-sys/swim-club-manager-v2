import './globals.css';
import { Inter } from 'next/font/google';

// إعداد الخط باش يبان نقي وعصري
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'MySwimPro v2 | نظام إدارة أندية السباحة',
  description: 'المنصة المتكاملة للمدربين المحترفين في المغرب',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // dir="rtl" ضرورية باش العربية تبدا من اليمين
    // lang="ar" باش المتصفح يعرف بلي السيت بالعربية
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
        {/* هاد children هي اللي كتعرض لينا الصفحات الأخرى (Home, Login, Onboarding) */}
        {children}
      </body>
    </html>
  );
}
