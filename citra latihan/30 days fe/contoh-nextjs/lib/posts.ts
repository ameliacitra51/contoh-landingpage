import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostSlug() {
    return fs.readdirSync(postsDirectory)
}

export async function getPostBySlug(slug:string) {
    const realSlug = slug.replace(/\.md$/, '') //untuk hapus .md dari slug
    const fullPath = path.join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const {data, content} = matter(fileContents)
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug: realSlug,
        contentHtml,
        ...data,
        date: data.date instanceof Date ? data.date.toISOString() : data.date
    }
}

export async function getAllPosts() {
    const slugs = getPostSlug();
    const posts = await Promise.all(slugs.map(getPostBySlug))
    return posts
}