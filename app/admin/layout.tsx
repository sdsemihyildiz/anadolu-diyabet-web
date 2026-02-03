export const metadata = {
  title: 'Admin - Anadolu Diyabet Derneği',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
