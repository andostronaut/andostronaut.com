import { Icons } from '@/components/icons'
import { CodeIcon, HomeIcon } from 'lucide-react'

export const DATA = {
  name: 'Ando RAMANAMIHANTA',
  initials: 'AR',
  username: 'andostronaut',
  url: 'https://andostronaut.com',
  location: 'Antananarivo, MG',
  locationLink: 'https://www.google.com/maps/place/antananarivo',
  description:
    "I'm a passionate software engineer with a strong background in full stack development and open-source contributions. I specialize in using Next.js, React, TypeScript, and Deno to build scalable and efficient web applications.",
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Deno',
    'Node.js',
    'Python',
    'Go',
    'Postgres',
    'Docker',
    'Rust',
    'Vue.js',
    'Express.js',
    'Bun',
    'GraphQL',
    'Supabase',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '#', icon: CodeIcon, label: 'Projects' },
  ],
  contact: {
    email: 'me@andostronaut.com',
    tel: '+261329974365',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://dub.sh/70tsoUD',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/OLcaELQ',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/jF9lEEb',
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:me@andostronaut.com',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: 'Gelda',
      href: '#',
      dates: '',
      active: true,
      description:
        'Gelda is a revolutionary AI-powered helpdesk assistant designed to provide users with an efficient and personalized support experience.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Drizzle',
        'TailwindCSS',
        'Shadcn UI',
        'Supabase',
        'Docker',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/kinotio/gelda',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/gelda.png',
      video: '',
    },
    {
      title: 'Drowser Studio',
      href: '#',
      dates: '',
      active: true,
      description:
        'Drowser Studio is a robust and intuitive app designed to help users track, visualize, and analyze the performance of various tests over time.',
      technologies: [
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'TailwindCSS',
        'Shadcn UI',
        'Docker',
      ],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/kinotio/drowser-studio',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/drowser-studio.png',
      video: '',
    },
    {
      title: 'Drowser',
      href: '#',
      dates: '',
      active: true,
      description:
        'A easy way to implement and write Selenium with TypeScript using Deno.',
      technologies: ['Typescript', 'Deno', 'Selenium'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/andostronaut/drowser',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/drowser.png',
      video: '',
    },
    {
      title: 'Cocli',
      href: '#',
      dates: '',
      active: true,
      description:
        'A ligthweight git commit prompt system to ensure readable and descriptive commit for Deno.',
      technologies: ['Typescript', 'Deno'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/andostronaut/cocli',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '/cocli.gif',
      video: '',
    },
  ],
} as const
