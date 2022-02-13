import PropTypes from 'prop-types'

const DetailProductDescriptionFeature = ({ items }) => {
  return (
    <div className='flex flex-col gap-y-[25px]'>
      <h3 className='text-soft-black text-[20px] leading-[33px]'>Drone features:</h3>
      <ul className='space-y-[20px]'>
        {items.map(({ icon, text }, index) => {
          return (
            <li className='flex items-center justify-start gap-x-[20px]' key={Math.random()}>
              <img src={`/${icon}`} alt="icon" width="25" height="24" key={Math.random()}/>
              <p className='font-light text-soft-black text-xl' key={Math.random()}>{text}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

DetailProductDescriptionFeature.propTypes = {
  items: PropTypes.array.isRequired
}

export default DetailProductDescriptionFeature