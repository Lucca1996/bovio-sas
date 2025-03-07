import React from 'react'
import './styles.css'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '../../components/theme-provider'
import { Footer } from '@/components/footer'
import { getUser } from './(authenticated)/actions/getUser'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
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
        </ThemeProvider>
      </body>
    </html>
  )
}
