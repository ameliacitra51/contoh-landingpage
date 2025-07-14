import { GetStaticPaths, GetStaticProps } from 'next'
import { getPostSlug, getPostBySlug } from '@/lib/posts'

type Props = {
  judul: string
  date: string
  contentHtml: string
}

export default function Post({ judul, date, contentHtml }: Props) {
  return (
    <div className="prose mx-auto p-4">
      <h1>{judul}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlug()
  const paths = slugs.map((slug) => ({
    params: { slug: slug.replace(/\.md$/, '') },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostBySlug(params?.slug as string)
  return {
    props: post,
  }
}
