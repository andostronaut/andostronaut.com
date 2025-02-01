import Markdown from 'react-markdown'
import { ProjectCard } from '@/components/project-card'
import { DATA } from '@/data/resume'
import { getBlogPosts, type BlogMetadata } from '@/data/blog'
import { BlogItem } from '@/components/blog-item'

export default async function Page() {
  const posts = await getBlogPosts()

  return (
    <div className="flex flex-col space-y-10">
      <section id="about">
        <Markdown className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
          I'm a software developer, open source enthusiast, and community
          builder. My experience includes leading workshops on AI, showcasing my
          versatility and commitment to the tech field.
        </Markdown>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore my latest creations and open-source projects.
              </h2>
              <p className="text-muted-foreground md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                I've participated in the conception and development of a range
                of projects, including libraries, npm packages, and complex web
                applications. Here are a few of my favorites.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project) => (
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="blogs">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My thoughts on software development, life, and more.{' '}
            </h2>

            <div className="mt-9">
              {posts
                .sort((a, b) => {
                  if (
                    new Date(a.metadata.publishedAt) >
                    new Date(b.metadata.publishedAt)
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
