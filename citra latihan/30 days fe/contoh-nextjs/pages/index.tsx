// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Selamat Datang </h1>
//       <p className="mb-4">Ini adalah halaman utama. Lihat daftar todo di bawah:</p>
//       <Link href="/todo" className="text-blue-600 underline">
//         Lihat Todo disini yaa !!
//       </Link>
//     </div>
//   )
// }

import Link from 'next/link'
import { posts } from '@/lib/post'

export default function HomePage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Daftar Artikel</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.subslug}>
            <Link href={`/blog/${post.subslug}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
