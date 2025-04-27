// Dynamic - for ecommerce website, blog etc

export default async function Product({params}:{params:Promise<{productId: string}>}){
    const productId = (await params).productId;
    return (
        <h1 className='text-white'>Product {productId}</h1>
    )
}