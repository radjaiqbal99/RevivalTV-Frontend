import Head from 'next/head'

import Page from '../../layouts/Page'

import DetailPorductSection from '../../components/detail-product/detail-product-section/DetailPorductSection'
import DetailProductDescription from '../../components/detail-product/detail-product-description/DetailProductDescription'
import DetailProductDescriptionSection from '../../components/detail-product/detail-product-description-section/DetailProductDescriptionSection'

const Detail = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/drone-icon.svg"></link>
        <title >Detail - Drone Light</title>
      </Head>
      <Page>
        <section id="detail">
          <div className="mx-auto min-w-[411px] max-w-[1440px] px-[30px] xl:px-[150px] py-[36px] xl:py-[100px] space-y-[50px]">
            <div className="mx-0 flex flex-col md:flex-row gap-[50px]">
              <DetailPorductSection />
              <DetailProductDescription />
            </div>
            <DetailProductDescriptionSection />
          </div>
        </section>
      </Page>
    </>
  )
}
export default Detail