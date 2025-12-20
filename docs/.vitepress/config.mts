import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Open MLOps Platform",
  description: "A VitePress Site",
  // Ensure assets resolve correctly on GitHub Pages (project pages)
  base: "/open-mlops/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Reference', link: '/database-reference' }
    ],

    sidebar: [
      {
        text: 'Reference',
        items: [
          { text: 'Database', link: '/database-reference' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
