import {notFound} from 'next/navigation';

// Dynamic - for ecommerce website, blog etc

export default async function Review({params}:{params:Promise<{productId: string, reviewId: string}>}){
    const { productId, reviewId } = await params;
    if(parseInt(reviewId)>1000){
        notFound();
    }
    return (
        <h1 className='text-white'>Product: {productId}, Review: {reviewId}</h1>
    )
}