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
        data-website-id="a6bab58e-6815-4acd-967d-1f0c4a7a285b"
      />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}

export default RootLayout
