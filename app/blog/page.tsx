import { getBlogPosts, type BlogMetadata } from '@/data/blog'
import { BlogItem } from '@/components/blog-item'

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <section>
      <h1 className="font-medium text-4xl mb-8 tracking-tighter">
        My thoughts on software development, life, and more.
      </h1>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <BlogItem
            key={post.slug}
            slug={post.slug}
            metadata={post.metadata as BlogMetadata}
          />
        ))}
    </section>
  )
}
