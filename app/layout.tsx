import '@/app/globals.css'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import Script from 'next/script'

import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const locale = cookies().get('Next-Locale')?.value || 'en'

  return (
    <html lang={locale} suppressHydrationWarning>
      <Script
        async
        src="https://analytics.andostronaut.com/script.js"
        data-website-id="f49f1439-5f47-48a6-ad0d-a88087c0e959"
      />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
