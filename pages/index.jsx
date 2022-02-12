import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Page from '../layouts/page'
import Hero from '../components/hero/Hero'
import Gallery from '../components/gallery/Gallery'
import Product from '../components/product/Product'
import Review from '../components/review/Review'
import Products from '../components/products/Products'

const Home = () => {
  return (
    <>
      <Head>
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
