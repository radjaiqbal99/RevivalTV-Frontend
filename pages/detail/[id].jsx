import Head from 'next/head'
import { useRouter } from 'next/router'

import Page from '../../layouts/page'

import DetailPorductSection from '../../components/detail-product/detail-product-section/DetailPorductSection'
import DetailProductDescription from '../../components/detail-product/detail-product-description/DetailProductDescription'
import DetailProductDescriptionSection from '../../components/detail-product/detail-product-description-section/DetailProductDescriptionSection'

const Detail = () => {

  const { query } = useRouter()

  return (
    <>
      <Head>
        <title >Detail - { query.id?.replace(/-/g,' ')}</title>
      </Head>
      <Page>
        <section id="detail">
          <div className="mx-auto max-w-[1440px] px-[30px] xl:px-[150px] py-[36px] xl:py-[100px] space-y-[50px]">
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