import { useRouter } from 'next/router'
import { posts } from '@/lib/post'

export default function BlogDetail() {
  const router = useRouter()
  const { slug } = router.query

  const post = posts.find((p) => p.subslug === slug)

  if (!post) return <p>Artikel tidak ditemukan.</p>

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
