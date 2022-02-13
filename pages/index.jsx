import Head from 'next/head'
import Image from 'next/image'

import Page from '../components/layouts/Page'
import Hero from '../components/hero/Hero'
import Gallery from '../components/gallery/Gallery'
import Product from '../components/product/Product'
import Review from '../components/review/Review'
import Products from '../components/products/Products'

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/drone-icon.svg"></link>
        <title>Autodrone</title>
      </Head>
      <Page>
        <Hero />
        <Gallery />
        <Product />
        <Products />
        <Review />
      </Page>
    </>
  )
}

export default Home
