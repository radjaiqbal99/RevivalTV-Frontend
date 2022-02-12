import Button from "../Button"

const ProductsCard = ({ cardImage, cardTitle, children, cardAction }) => {
  return (
    <div className="snap-center snap-always flex-none sm:w-[500px] sm:h-[648px] sm:p-[45px] sm:rounded-xl sm:box-border sm:border-[1px] sm:border-gray-200 flex flex-col gap-[30px] justify-between">
      <div className="w-full mx-auto">
        <img className="rounded-xl w-full h-auto" src={cardImage} alt="Mini Drone Image" />
      </div>
      <div className="w-full h-full flex flex-col justify-between items-center">
        <div className="text-center space-y-[10px]">
          <h3 className="text-4xl text-soft-black font-semibold leading-[54px]">{cardTitle}</h3>
          <p className="text-xl text-soft-black font-light leading-9">{children}</p>
        </div>
        <Button goTo={cardAction}>get now</Button>
      </div>
    </div>
  )
}
export default ProductsCard