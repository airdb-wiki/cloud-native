import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'Docker',
    children: [
      {
        text: 'docker',
        children: [
          { text: 'cmd', link: '/docker/', },
        ],
      },
      {
        text: 'docker compose',
        children: [
          { text: 'CLI', link: '/reference/cli.html', },
        ],
      },
    ],
  },
  {
    text: 'K8S',
    children: [
      {
        text: 'Ingress',
        children: [
          '/reference/plugin/pwa.md',
        ],
      },
      {
        text: 'Monitoring',
        children: [
          '/reference/plugin/pwa-popup.md',
        ],
      },
    ],
  },
]
