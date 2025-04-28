import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: 'Blog'
    }
    
}

export default async function Blog(){
    await new Promise(resolve => {
        setTimeout(()=>{
            resolve('intentional delay')
        },2000)
    })
    return (
        <div>
            <h1 className='bg-black text-white'>
                My blog!
                </h1>
                <Link href = '/'>
                <button className="border-amber-50"> Home </button>
                </Link>
        </div>
    )
}