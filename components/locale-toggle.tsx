'use client'

import { CheckIcon, LanguagesIcon } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

import { useChangeLocale, useCurrentLocale } from '@/locales/lib/client'

const locales = [
  {
    name: 'English',
    value: 'en',
  },
  {
    name: 'French',
    value: 'fr',
  },
]

export const LocalToggle = () => {
  const changeLocale = useChangeLocale({ preserveSearchParams: true })
  const currentLocale = useCurrentLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <div className="flex items-center gap-2">
            <LanguagesIcon className="h-5 w-5" />
            <span className="block lg:hidden">{currentLocale}</span>
          </div>
          <span className="sr-only">Change Locale</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.value}
            onClick={() => changeLocale(locale.value as typeof currentLocale)}
            disabled={locale.value === currentLocale}
          >
            <span>{locale.name}</span>
            {locale.value === currentLocale ? (
              <DropdownMenuShortcut>
                <CheckIcon className="h-4 w-4" />
              </DropdownMenuShortcut>
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
