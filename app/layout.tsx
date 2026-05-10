import './globals.css';
export const metadata = {
  title: 'نظام إدارة نادي السباحة',
  description: 'تطبيق احترافي لإدارة المدربين والسباحين',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased">{children}</body>
    </html>
  )
}
