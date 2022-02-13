import PropTypes from 'prop-types'

const ProductSpesification = ({ children, title }) => {
  return (
    <div className="flex-none w-6/12 sm:w-fit text-center">
      <h3 className="text-soft-black text-4xl leading-[54px] font-semibold">{title}</h3>
      <p className="mt-[5px] font-light text-xl leading-[30px]">{children}</p>
    </div>
  )
}

ProductSpesification.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

ProductSpesification.defaultProp = {
  children: <p>Example<br />Children</p>,
  titile : 'Example Titile'
}

export default ProductSpesification