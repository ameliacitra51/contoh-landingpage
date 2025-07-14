import Link from "next/link"

export default function Blog () {
    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h2 className="text-center text-white text-2xl mb-2">Haii disini tempat belajar nya</h2>
      <p className="text-center font-semibold text-white mb-4">Mau kembali ke beranda ?</p>
      <Link href="/about">
        <button className="rounded-lg text-white bg-blue-400 px-4 py-2 hover:bg-blue-500">
          Klik disini untuk kembali
        </button>
      </Link>
    </div>
    )
}