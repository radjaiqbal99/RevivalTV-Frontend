import PropTypes from 'prop-types'

const DetailProductSectionPreviews = ({ image }) => {
  return (
    <div className='w-3/12 h-auto lg:rounded-xl lg:p-2.5 lg:box-border lg:border-[1px] cursor-pointer' onClick={()=>alert('Image Change')}>
      <img className='lg:rounded-xl w-full h-auto' src={`/${image}`} alt="Preview Product" />
    </div>
  )
}

DetailProductSectionPreviews.propTypes = {
  image: PropTypes.string.isRequired
}

export default DetailProductSectionPreviews