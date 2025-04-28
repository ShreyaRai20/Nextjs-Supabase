import Link from "next/link"

export default function ProductList(){
    const productId = 100
    const productId3 = 3
    return (
    <>
        <Link href='/'>Home</Link>
        <h1 className='text-white'>Product List</h1>
        <Link href='/products/1'><h2 className='text-white'>Product 1</h2></Link>
        <Link href={`/products/${productId}`}> <h2 className='text-white'>Product {productId}</h2></Link>
        <Link href={`/products/${productId3}`} replace> <h2 className='text-white'>Product {productId3}</h2></Link>
    </>
    )
}