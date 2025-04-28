'use client'
import Link from "next/link";
import { use } from "react";

export default function Article({params,searchParams}:
    {params:Promise<{articleId: string}>;
    searchParams: Promise<{lang ?: 'en'|'es'|'fr'}>}){
    const { articleId } = use(params);
    const { lang = 'en' } = use(searchParams);
    
    return (
        <div>
            <h1 className='text-white'>Articles {articleId}</h1>
            <p>Reading in langauge - {lang}</p>
            <Link className='text-amber-200' href = {`/articles/${articleId}?lang=en`}> English</Link>
            <Link className='text-amber-200' href = {`/articles/${articleId}?lang=es`}> Spanish</Link>
            <Link className='text-amber-200' href = {`/articles/${articleId}?lang=fr`}> French</Link>
            </div>
    )
}

// export default async function Article({params,searchParams}:
//     {params:Promise<{articleId: string}>;
//     searchParams: Promise<{lang ?: 'en'|'es'|'fr'}>}){
//     const { articleId } = await params;
//     const { lang = 'en' } = await searchParams;
    
//     return (
//         <div>
//             <h1 className='text-white'>Articles {articleId}</h1>
//             <p>Reading in langauge - {lang}</p>
//             <Link className='text-amber-200' href = {`/articles/${articleId}?lang=en`}> English</Link>
//             <Link className='text-amber-200' href = {`/articles/${articleId}?lang=es`}> Spanish</Link>
//             <Link className='text-amber-200' href = {`/articles/${articleId}?lang=fr`}> French</Link>
//             </div>
//     )
// }