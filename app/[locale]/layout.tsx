import type { Metadata } from 'next'

import Navbar from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { TooltipProvider } from '@/components/ui/tooltip'

import { I18nProviderClient } from '@/locales/lib/client'

import { DATA } from '@/data/resume'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = async ({
  params,
}: MetadataProps): Promise<Metadata> => {
  const locale = params.locale

  return {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    keywords: DATA.keywords,
    openGraph: {
      title: `${DATA.name}`,
      description: DATA.description,
      url: DATA.url,
      siteName: `${DATA.name}`,
      locale: locale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: `${DATA.name}`,
      card: 'summary_large_image',
    },
    verification: {
      google: '',
      yandex: '',
    },
  }
}

const SubLayout = ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProviderClient locale={locale}>
        <TooltipProvider delayDuration={0}>
          <main className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
            {children}
          </main>
          <Navbar />
        </TooltipProvider>
      </I18nProviderClient>
    </ThemeProvider>
  )
}

export default SubLayout
