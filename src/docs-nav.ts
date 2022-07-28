export type NavItem = {
  type: 'title' | 'link' | 'group' | 'overview' | 'jumplist'
  label: string
  items?: NavItem[]
  href?: string
  versionName?: string
  id?: string
}

export type DocsNav = NavItem[];

export const modalJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/modal/api#provider",
    id: 'provider',
    label: 'ModalProvider'
  },
  {
    type: 'link',
    href: "/docs/modal/api#container",
    id: 'container',
    label: 'ModalContainer'
  },
  {
    type: 'link',
    href: "/docs/modal/api#modal",
    id: 'modal',
    label: 'Modal'
  },
  {
    type: 'link',
    href: "/docs/modal/api#toggler",
    id: 'toggler',
    label: 'ModalToggler'
  },
  {
    type: 'link',
    href: "/docs/modal/api#useModal",
    id: 'useModal',
    label: 'useModal'
  },
  {
    type: 'link',
    href: "/docs/modal/api#asModal",
    id: 'asModal',
    label: 'asModal'
  },
];

export const cssGridJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/css-grid/api#provider",
    label: 'GridProvider',
    id: 'provider'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#grid",
    label: 'Grid',
    id: 'grid'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#cell",
    label: 'Cell',
    id: 'cell'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#useGrid",
    label: 'useGrid',
    id: 'useGrid'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#useCell",
    label: 'useCell',
    id: 'useCell'
  },
  {
    type: 'link',
    href: "/docs/css-grid/api#useSettings",
    label: 'useSettings',
    id: 'useSettings'
  }
]

export const jumplistJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/jumplist/api#provider",
    label: 'JumplistProvider',
    id: 'provider',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#node",
    label: 'JumplistNode',
    id: 'node',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#button",
    label: 'JumplistButton',
    id: 'button',
  },
  {
    type: 'link',
    href: "/docs/jumplist/api#useJumplist",
    label: 'useJumplist',
    id: 'useJumplist',
  },
]

export const sliderJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/slider/api#provider",
    label: 'SliderProvider',
    id: 'provider',
  },
  {
    type: 'link',
    href: "/docs/slider/api#track",
    label: 'SliderTrack',
    id: 'track',
  },
  {
    type: 'link',
    href: "/docs/slider/api#slide",
    label: 'Slide',
    id: 'slide',
  },
  {
    type: 'link',
    href: "/docs/slider/api#button",
    label: 'SliderButton',
    id: 'button',
  },
  {
    type: 'link',
    href: "/docs/slider/api#useSlider",
    label: 'useSlider',
    id: 'useSlider',
  },
]

export const collapsiblesJumplistNav: NavItem[] = [
  {
    type: 'link',
    href: "/docs/collapsibles/api#collapsible",
    label: 'Collapsible',
    id: 'collapsible'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#content",
    label: 'CollapsibleContent',
    id: 'content'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#toggler",
    label: 'CollapsibleToggler',
    id: 'toggler'
  },
  {
    type: 'link',
    href: "/docs/collapsibles/api#group",
    label: 'CollapsibleGroup',
    id: 'group'
  },
];

export const nav: DocsNav = [
  {
    type: 'title',
    label: 'Documentation'
  },
  {
    type: 'group',
    href: "/docs/getting-started",
    label: 'Getting Started',
    items: [
      {
        type: 'overview',
        href: "/docs/getting-started",
        label: 'Overview',
      },
    ]
  },
  {
    type: 'group',
    href: '/docs/node-sdk',
    label: 'Node SDK',
    versionName: 'metro-sdk',
    items: [
      {
        type: 'overview',
        href: '/docs/node-sdk',
        label: 'Introduction'
      },
      {
        type: 'link',
        href: '/docs/node-sdk/lists',
        label: 'List Actions'
      }
    ]
  }
]
