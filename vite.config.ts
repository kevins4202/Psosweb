import { defineConfig } from 'vite'
import path from 'path'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { articles, authors } from './src/app/blogData'
import { aboutPath, authorsPath, blogPath, chapterPaths } from './src/app/pagePaths'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function pagesRouteEntries() {
  return {
    name: 'pages-route-entries',
    apply: 'build' as const,
    writeBundle({ dir }: { dir?: string }) {
      const output = dir ?? 'dist'
      const html = readFileSync(path.join(output, 'index.html'), 'utf8')
      const routes = [
        aboutPath,
        ...Object.values(chapterPaths),
        blogPath,
        ...articles.map(({ slug }) => `${blogPath}/${slug}`),
        ...authors.map(({ slug }) => `${authorsPath}/${slug}`),
      ]

      for (const route of routes) {
        const directory = path.join(output, route.slice(1))
        mkdirSync(directory, { recursive: true })
        writeFileSync(path.join(directory, 'index.html'), html)
      }

      writeFileSync(path.join(output, '404.html'), html)
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    pagesRouteEntries(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@': path.resolve(__dirname, './src/app'),
    },
  },
})
