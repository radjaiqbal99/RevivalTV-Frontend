const DetailProductSectionPreviews = ({ image }) => {
  return (
    <div className='w-3/12 h-auto rounded-xl p-2.5 box-border border-[1px] cursor-pointer' onClick={()=>alert('Image Change')}>
      <img className='rounded-xl w-full h-auto' src={`/${image}`} alt="Preview Product" />
    </div>
  )
}
export default DetailProductSectionPreviews