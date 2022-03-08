import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Languages = 'tr' | 'en'

const postsDirectory: Record<string,any> = {}
postsDirectory['tr'] = join(process.cwd(), '_posts/tr')
postsDirectory['en'] = join(process.cwd(), '_posts/en')

export function getPostSlugs(lang: Languages) {
  return fs.readdirSync(postsDirectory[lang])
}

export function getPostBySlug(slug: string, lang: Languages, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory[lang], `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(lang: Languages, fields: string[] = []) {
  const slugs = getPostSlugs(lang)
  const posts = slugs
    .map((slug) => getPostBySlug(slug, lang, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
