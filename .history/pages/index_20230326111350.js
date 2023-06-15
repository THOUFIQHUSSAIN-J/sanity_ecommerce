import React from 'react'

const index = () => {
  return (
    <>
      HeroBanner

      <div className=''>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations.</p>
      </div>

      <div>
        {['Product 1', 'Product 2'].map(
          (product) => product)}
      </div>

      Footer
    </>
  )
}

export default index