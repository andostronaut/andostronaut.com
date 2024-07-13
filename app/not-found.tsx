'use client'

import { useRouter } from 'next/navigation'

import { Button } from '../components/ui/button'

export default function NotFound() {
  const router = useRouter()

  return (
    <div style={{ height: '50vh' }}>
      <div className="w-full flex flex-col items-center justify-center h-full">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            404 - Page Not Found
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            The page you re looking for doesn t exist or has been moved.
          </p>
          <Button
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            onClick={() => router.back()}
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  )
}
