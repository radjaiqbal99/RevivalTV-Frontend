const ReviewCard = ({ children, cardProfilePicture, cardProfileName, cardProfileJob }) => { 
  return (
    <div className="w-[354px] h-[250px] rounded-lg box-border border-[1px] border-gray-200 p-[30px] space-y-[10px] sm:space-y-[30px]">
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
export default ReviewCard