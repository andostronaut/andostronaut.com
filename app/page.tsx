import Link from 'next/link'
import Markdown from 'react-markdown'
import { ProjectCard } from '@/components/project-card'
import { DATA } from '@/data/resume'

export default async function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex">
              <h1 className="text-6xl font-bold">{`Hey, I'm ${DATA.name.split(' ')[0]}`}</h1>

              <div className="mt-9 flex gap-4">
                {DATA.contact.social.map((s) => (
                  <Link key={s.name} href={s.url} className="text-sm font-sans">
                    <s.icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
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
                image={project.image}
                video={project.video}
                links={project.links}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
