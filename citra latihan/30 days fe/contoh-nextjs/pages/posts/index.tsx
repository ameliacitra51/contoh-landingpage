import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default function BlogIndex({ posts }: any) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Daftar Blog</h1>
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 underline">
              {post.judul}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: { posts },
  }
}
