import Link from 'next/link'
import Markdown from 'react-markdown'
import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { ProjectCard } from '@/components/project-card'
import { DATA } from '@/data/resume'

const BLUR_FADE_DELAY = 0.04

export default async function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hey, I'm ${DATA.name.split(' ')[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-sm font-sans mt-2">{`@${DATA.username}`}</h2>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert">
            I'm a software developer, open source enthusiast, and community
            builder. My experience includes leading workshops on AI, showcasing
            my versatility and commitment to the tech field.
          </Markdown>
        </BlurFade>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore my latest creations and open-source projects.
                </h2>
                <p className="text-muted-foreground md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                  I've participated in the conception and development of a range
                  of projects, including libraries, npm packages, and complex
                  web applications. Here are a few of my favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
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
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto text-muted-foreground md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed">
                Want to connect? Send me a
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-black underline font-semibold hover:underline dark:text-white ml-1"
                >
                  direct message on X
                </Link>
                , and I'll make sure to get back to you.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </div>
  )
}
