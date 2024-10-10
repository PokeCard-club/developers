import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PokeCard.club Developers',
  description: 'ポケモンカードを盛り上げよう',
  lastUpdated: true,
  lang: 'ja',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ニュース', link: '/news' },
      { text: 'ドキュメント', link: '/deck-api' },
    ],

    sidebar: {
      '/deck-api/': [],
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
  },
})
