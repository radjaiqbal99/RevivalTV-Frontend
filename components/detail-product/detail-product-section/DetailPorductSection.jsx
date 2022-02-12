import Image from 'next/image'

import DetailProductSectionPreviews from './DetailProductSectionPreviews'

const DetailPorductSection = () => {

  const imageState = ['highlight1.png', 'highlight2.png', 'highlight3.png', 'highlight4.png']

  return (
    <div className="w-fit flex flex-col gap-y-[20px]">
      <div className='w-fit h-auto box-border p-[15px] border-gray-200 border-[1px] rounded-xl'>
        <img className='h-auto rounded-xl ' src="/drone-light-highlight.png" alt="Highlight Preview" />
      </div>
      <div className='flex items-center justify-between gap-x-2.5'>
        {imageState.map((data, index) => (<DetailProductSectionPreviews image={data} key={index}/>))}
      </div>
    </div>
  )
}
export default DetailPorductSection