import React from 'react'
import {Product, FooterBanner, HeroBanner}

const index = () => {
  return (
    <>
      HeroBanner

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations.</p>
      </div>

      <div className='products-container'>
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>

      Footer
    </>
  )
}

export default index