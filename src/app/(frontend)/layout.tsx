import React from 'react'
import './styles.css'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '../../components/theme-provider'
import { Footer } from '@/components/footer'
import { getUser } from './(authenticated)/actions/getUser'
import { Toaster } from 'sonner'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export const dynamic = 'force-dynamic';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar user={user} />
          <main>{children}</main>
          <Footer/>
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}
