import React from 'react'
import Link from 'next/link';
import { urlFor } from '@/lib/client'; 


const Product = ({product : {image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`product/${slug.current}`}>
        <div className='product-card'>
          
        </div>
      </Link>
    </div>
  )
}

export default Product