type Post = {
  id: number
  text: string
  completed: number | boolean
}

type Props = {
  post: Post
}

export default function PostDetail({ post }: Props) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Judul: {post.text}</h1>
      <p>Status: {post.completed ? "Selesai" : "Belum selesai"}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:5000/api/todos')
  const posts: Post[] = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`http://localhost:5000/api/todos/${params.id}`)

  if (!res.ok) {
    return {
      notFound: true,
    }
  }

  const post: Post = await res.json()

  return {
    props: {
      post,
    },
  }
}
