import Link from 'next/link'
import type { BlogMetadata } from '@/data/blog'

interface Props {
  slug: string
  metadata: BlogMetadata
}

export function BlogItem({ slug, metadata }: Props) {
  return (
    <Link className="flex flex-col space-y-1 mb-4" href={`/blog/${slug}`}>
      <div className="w-full flex flex-col">
        <p className="tracking-tight">{metadata.title}</p>
        <p className="h-6 text-xs text-muted-foreground">
          {metadata.publishedAt}
        </p>
      </div>
    </Link>
  )
}
