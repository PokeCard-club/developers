import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PokeCard.club Developers',
  description: 'ポケモンカードを盛り上げよう',
  lastUpdated: true,
  lang: 'ja',
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ニュース', link: '/news' },
      { text: 'ドキュメント', link: '/deck-api' },
    ],
    sidebar: {
      '/deck-api/': [
        {
          text: 'API',
          items: [
            { text: '[GET] /deck/:code', link: '/deck-api/deck' },
            { text: '[GET] /cards?=id', link: '/deck-api/cards' },
          ],
        },
        {
          text: 'Frontend',
          items: [
            { text: 'TypeScript', link: '/deck-api/frontend/typescript' },
          ],
        },
      ],
      '/news/': [],
    },
    socialLinks: [
      { icon: 'twitter', link: 'https://x.com/PokeCard_club' },
      { icon: 'discord', link: 'https://discord.gg/UVmx4QpeqM' },
    ],
    footer: {
      copyright: 'Development by PokeCard.club',
    },
    search: {
      provider: 'local',
    },
    outline: {
      level: [3, 4],
    },
  },
})
