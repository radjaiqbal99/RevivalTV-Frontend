import PropTypes from 'prop-types'

const ReviewCard = ({ children, cardProfilePicture, cardProfileName, cardProfileJob }) => { 
  return (
    <div className="w-[354px] h-[250px] rounded-lg box-border border-[1px] border-gray-200 p-[30px] flex flex-col justify-between">
      <p className="font-light text-soft-black text-base leading-[30px]">{children}</p>
      <div className="flex items-center gap-[30px]">
        <img className="w-[70px]" src={cardProfilePicture} alt="Profile Picture" />
        <div className="flex flex-col overflow-hidden">
          <h6 className="text-soft-black font-semibold leading-[30px] text-xl">{cardProfileName}</h6>
          <p className="text-soft-black font-light text-lg leading-[27px] truncate">{cardProfileJob}</p>
        </div>
      </div>
    </div>
  )
}

ReviewCard.propTypes = {
  children: PropTypes.string,
  cardProfilePicture: PropTypes.string,
  cardProfileName: PropTypes.string,
  cardProfileJob: PropTypes.string
}

ReviewCard.defaultProp = {
  children: 'Example Content',
  cardProfilePicture: '/hugo-adams.png',
  cardProfileName: 'Example Name',
  cardProfileJob: 'Example Job'
}

export default ReviewCard