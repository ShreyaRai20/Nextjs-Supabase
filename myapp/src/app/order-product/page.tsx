'use client'

import {useRouter} from 'next/navigation'

export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () =>{
        console.log('Product Order')
        router.push('/')
    }
    return (
        <>
        <div className="text-amber-200">Order Product</div>
        <button className="text-black-200 bg-amber-50 cursor-pointer border-b-2" onClick={handleClick}>Place Order</button>
        </>
    )
  }