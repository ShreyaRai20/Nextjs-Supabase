//  favoring configurations over routing
import Link from "next/link"

export default function Home() {
    return (
      <h1 className='bg-black text-white'>
        Welcome Home!
        <Link href='/blog'>
        <button className="border-amber-50"> blog </button>
        </Link>
        <Link href='/products'>
        <div className="border-amber-50"> Products </div>
        </Link>
        <Link href='/articles/breaking-news-123?lang=en'>
        <div className="border-amber-50"> Read in English </div>
        </Link>
        <Link href='/articles/breaking-news-123?lang=fr'>
        <div className="border-amber-50"> Read in French</div>
        </Link>
      </h1>
    )
  }
