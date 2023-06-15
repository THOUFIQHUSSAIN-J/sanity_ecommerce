import React from 'react'
import { client, urlFor } from '@/lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price } = product;
    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[0])} />
                    </div>
                    {/* <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img src={urlFor(item)} 
                            className="" 
                            onMouseEnter=""/>
                        ))}
                    </div> */}
                </div>
                <div className='product-details-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                        <p>
                            (20)
                        </p>
                        <h4>Details:</h4>
                        <p>{details}</p>
                        <p className='price'>₹{price}</p>
                        <div className='quantity'>
                            <h3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    //Give me only the current data from the Product table
    const query = `*[_type == "product"]{  
        slug{
            current
        }
    }`;
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));
    return {
        paths,
        fallback: 'blocking',
    }
}

export const getStaticProps = async ({ params: { slug } }) => {

    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { product, products }
    }
}

export default ProductDetails