import React from 'react'
import { client, urlFor } from '@/lib/client';

const ProductDetails = () => {
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticProps = async ({params:{slug}}) => {

    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery)

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
        props: { products, bannerData }
    }
}

export default ProductDetails