'use client'

import { usePathname } from "next/navigation"

export default function NotFound() {
  const  pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
    return (
      <h1 className='bg-black text-white'>
        Review {reviewId} not found for product {productId}!
      </h1>
    )
  }