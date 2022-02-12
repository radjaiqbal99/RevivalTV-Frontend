import classNames from "classnames"

const GalleryCard = ({ cardTitle, cardBody, cardBodyStrong, backgroundImage, color }) => {

  const cardColor = {
    black: 'text-soft-black',
    white: 'text-white'
  }

  return (
    <>
      <div className="w-full lg:w-6/12 text-center relative">
        <img className="w-full h-auto" src={backgroundImage} alt="Galerry Image" />
        <div className="px-4 sm:px-8 md:px-20 xl:px-14 absolute top-[36px] md:top-[120px] lg:top-10 xl:top-[120px] w-full">
          <h4 className={classNames(cardColor[color], 'text-3xl sm:text-5xl lg:text-4xl xl:text-5xl leading-[54px] sm:leading-[74px] font-semibold')}>{cardTitle}</h4>
          <p className={classNames(cardColor[color], "text-1xl sm:text-[28px] lg:text-2xl xl:text-[28px] sm:mt-2.5 font-light leading-relaxed")}><span className="text-gray-400">{cardBody}</span>  {cardBodyStrong}</p>
        </div>
      </div>
    </>
  )
}
export default GalleryCard