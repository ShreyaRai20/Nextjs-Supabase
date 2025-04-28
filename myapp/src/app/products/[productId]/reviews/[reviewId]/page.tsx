import { redirect} from 'next/navigation';

// Dynamic - for ecommerce website, blog etc

function getRandomInt(count: number){
    return Math.floor(Math.random()*count);
}

export default async function Review({params}:{params:Promise<{productId: string, reviewId: string}>}){
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error('Error Loading')
    }
    const { productId, reviewId } = await params;
    if(parseInt(reviewId)>1000){
        // notFound();
        redirect('/products')
    }
    return (
        <h1 className='text-white'>Product: {productId}, Review: {reviewId}</h1>
    )
}