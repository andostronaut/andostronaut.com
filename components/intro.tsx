import Link from 'next/link'
import { DATA } from '@/data/resume'

export function Intro() {
  return (
    <section id="intro">
      <div className="mx-auto">
        <div className="gap-2 flex">
          <div className="flex-col flex w-full">
            <h1 className="text-6xl font-bold">{`Hey, I'm ${DATA.name.split(' ')[0]}`}</h1>

            <div className="my-9 flex justify-between items-center w-full">
              <div className="flex gap-4">
                {DATA.menus.map((s) => (
                  <Link key={s.name} href={s.url}>
                    <s.icon className="size-4" />
                  </Link>
                ))}
              </div>

              <div className="flex gap-4">
                {DATA.contact.socials.map((s) => (
                  <Link key={s.name} href={s.url} className="text-sm font-sans">
                    <s.icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
