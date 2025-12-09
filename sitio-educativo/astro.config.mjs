import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';
import remarkMath from 'remark-math';
import remarkBreaks from 'remark-breaks';
import rehypeKatex from 'rehype-katex';
import rehypeExternalLinks from 'rehype-external-links';
import { youtubeAutoEmbed } from './src/plugins/youtube-auto-embed.js';
import tableWrapper from './src/plugins/table-wrapper.js';

export default defineConfig({
  site: 'https://ediprofe.com',
  output: 'static',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  compressHTML: true,
  markdown: {
    remarkPlugins: [
      // CRÍTICO: math PRIMERO para máxima compatibilidad
      [remarkMath, {
        singleDollarTextMath: true
      }],
      remarkBreaks,
      youtubeAutoEmbed
    ],
    rehypePlugins: [
      [rehypeKatex, {
        // CONFIGURACIÓN ULTRA ROBUSTA
        strict: false,
        trust: true,
        output: 'htmlAndMathml',
        throwOnError: false,
        errorColor: '#cc0000',
        fleqn: false,
        minRuleThickness: 0.05,
        maxSize: 100,
        maxExpand: 1000,
        macros: {
          "\\R": "\\mathbb{R}",
          "\\N": "\\mathbb{N}",
          "\\Z": "\\mathbb{Z}",
          "\\Q": "\\mathbb{Q}",
          "\\C": "\\mathbb{C}",
          "\\sen": "\\text{sen}",
          "\\cos": "\\text{cos}"
        }
      }],
      [rehypeExternalLinks, {
        target: '_blank',
        rel: ['noopener', 'noreferrer']
      }],
      tableWrapper
    ],
    smartypants: false,
    gfm: true,
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  vite: {
    optimizeDeps: {
      include: ['katex']
    },
    ssr: {
      noExternal: ['katex']
    }
  }
});
