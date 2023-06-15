import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='layout'>
      <Head>
        <title>
          BuyIt!
        </title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='main-container'>
        EMPTY
      </main>
      <footer
    </div>
  )
}

export default Layout