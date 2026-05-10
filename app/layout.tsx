export const metadata = {
  title: 'Swim Club Manager',
  description: 'Manage your swimming club efficiently',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
