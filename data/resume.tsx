import { Icons } from '@/components/icons'

export const DATA = {
  name: 'Ando RAMANAMIHANTA',
  initials: 'AR',
  username: 'andostronaut',
  url: 'https://andostronaut.com',
  location: 'Antananarivo, MG',
  locationLink: 'https://www.google.com/maps/place/antananarivo',
  description: `I'm a software developer, open source enthusiast, and community
    builder. My experience includes leading workshops on AI, showcasing my
    versatility and commitment to the tech field.`,
  keywords: [
    'Open Source',
    'Developer',
    'Open-Sourcer',
    'OSS',
    'Contributor',
    'Software Developer',
    'Software Engineer',
  ],
  menus: [
    {
      name: 'Home',
      url: '/',
      icon: Icons.home,
    },
    {
      name: 'Blog',
      url: '/blog',
      icon: Icons.blog,
    },
  ],
  contact: {
    email: 'hi@andostronaut.com',
    tel: '+261329974365',
    socials: [
      {
        name: 'Bluesky',
        url: 'https://dub.sh/1zKla2A',
        icon: Icons.bluesky,
      },
      {
        name: 'GitHub',
        url: 'https://dub.sh/70tsoUD',
        icon: Icons.github,
      },
      {
        name: 'LinkedIn',
        url: 'https://dub.sh/OLcaELQ',
        icon: Icons.linkedin,
      },
      {
        name: 'X',
        url: 'https://dub.sh/jF9lEEb',
        icon: Icons.x,
      },
      {
        name: 'Send Email',
        url: 'mailto:hi@andostronaut.com',
        icon: Icons.email,
      },
    ],
  },
  projects: [
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
          href: 'https://github.com/kinotio/drowser',
          icon: 'Github',
        },
      ],
    },
    {
      title: 'Cocli',
      href: '#',
      dates: '',
      active: true,
      description:
        'A ligthweight git commit prompt system to ensure readable and descriptive commit for Deno.',
      technologies: ['Typescript', 'Deno', 'Git'],
      links: [
        {
          type: 'Source',
          href: 'https://github.com/andostronaut/cocli',
          icon: 'Github',
        },
      ],
    },
    {
      title: 'Gelda',
      href: '#',
      dates: '',
      active: true,
      description:
        'Gelda is a revolutionary AI-powered helpdesk assistant designed to provide users with an efficient and personalized support experience.',
      technologies: [
        'SaaS',
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'Drizzle',
        'TailwindCSS',
        'Shadcn UI',
        'Supabase',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://gelda.kinotio.io',
          icon: 'Globe',
        },
      ],
    },
    {
      title: 'Drowser Studio',
      href: '#',
      dates: '',
      active: true,
      description:
        'Drowser Studio is a robust and intuitive app designed to help users track, visualize, and analyze the performance of various tests over time.',
      technologies: [
        'SaaS',
        'Next.js',
        'Typescript',
        'PostgreSQL',
        'TailwindCSS',
        'Shadcn UI',
        'PocketBase',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://drowser.kinotio.io/studio',
          icon: 'Globe',
        },
      ],
    },
  ],
}
