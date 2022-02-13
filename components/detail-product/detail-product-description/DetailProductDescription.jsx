import { useRouter } from "next/router";

import Button from '../../Button'
import DetailProductDescriptionFeature from './DetailProductDescriptionFeature'

const DetailProductDescription = () => {

  const { query } = useRouter() ? useRouter() : { query: { id: 'Drone Name'} }

  const featureState = [
    {
      icon: 'camera-icon.png',
      text: '4K Camera Resolution'
    },
    {
      icon: 'storage-icon.png',
      text: '2 TB Storage'
    },
    {
      icon: 'timmer-icon.png',
      text: '60 m/s Speed'
    },
    {
      icon: 'battery-icon.png',
      text: '5000 mAh Battery'
    }
  ]

  return (
    <div className='flex-none w-full md:w-[346px] flex flex-col gap-y-[27px]'>
      <div className='mx-0 flex flex-col gap-x-2.5'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-soft-black text-[28px] leading-[42px] capitalize'>{query.id?.replace(/-/g,' ')}</h2>
          <p className='font-light text-xl text-soft-black leading-[30px]'>Super fast, easy control drone</p>
        </div>
        <h1 className='text-soft-black font-semibold text-5xl leading-[72px]'>$ 4.500,00</h1>
        <DetailProductDescriptionFeature items={featureState} />
      </div>
      <Button className='w-full' goTo="order">ORDER IT NOW</Button>
    </div>
  )
}
export default DetailProductDescription