export type NavItem = {
  type: 'title' | 'link' | 'group' | 'overview' | 'jumplist'
  label: string
  items?: NavItem[]
  href?: string
  versionName?: string
  id?: string
}

export type DocsNav = NavItem[]

export const nav: DocsNav = [
  {
    type: 'title',
    label: 'Documentation',
  },

  /** GETTING STARTED PAGE LINKS */
  {
    type: 'group',
    href: '/docs/getting-started',
    label: 'Introduction',
    items: [
      {
        type: 'overview',
        href: '/docs/getting-started',
        label: 'Overview',
      },
      {
        type: 'overview',
        href: '/docs/getting-started/endpoints',
        label: 'Endpoints',
      },
      {
        type: 'overview',
        href: '/docs/getting-started/faqs',
        label: "FAQ's",
      },
    ],
  },

  /** ACTION PAGE LINKS */
  {
    type: 'group',
    href: '/418',
    label: 'Actions',
    versionName: 'construction',
    items: [],
  },

  /** BOT PAGE LINKS */
  {
    type: 'group',
    href: '/418',
    versionName: 'construction',
    label: 'Bots',
  },

  /** LIST PAGE LINKS */
  {
    type: 'group',
    href: '/docs/lists',
    label: 'Lists',
    versionName: 'metro-api',
    items: [
      {
        type: 'overview',
        href: '/docs/lists/get',
        label: 'Get List',
      },
    ],
  },

  /** LITTLE CLOUD PAGE LINKS */
  {
    type: 'group',
    href: '/docs/little-cloud',
    label: 'Restores',
    versionName: 'construction',
    items: [],
  },

  /** SCHEMA PAGE LINKS */
  {
    type: 'group',
    href: '/docs/schemas',
    label: 'Schemas',
    versionName: 'metro-api',
    items: [
      {
        type: 'link',
        href: '/docs/schemas/bot',
        label: 'Bot Schema',
      },
    ],
  },

  /** NODE LIB PAGE LINKS */
  {
    type: 'group',
    href: '/docs/node-sdk',
    label: 'Node SDK',
    versionName: 'construction',
    items: [
      {
        type: 'link',
        href: '/418',
        label: 'List Actions',
      },
    ],
  },
]
