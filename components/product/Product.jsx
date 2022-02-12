import ProductSpesification  from "./ProductSpesification"

const Product = () => {
  return (
    <section id="product" className="mx-0 bg-gray-100">
      <div className="max-w-[1440px] mx-auto py-20 px-[30px] xl:px-[150px] flex flex-col lg:flex-row gap-[30px] xl:gap-[80px] ">
        <div className="flex-none w-[227px] sm:w-[342px] mx-auto lg:w-[280px] xl:w-[342px]">
          <img className="w-full h-auto" src="/drone-light.png" alt="Drone Light Image" />
        </div>
        <div className="flex flex-col items-center lg:items-start justify-start gap-[30px]">
          <h2 className="text-soft-black text-4xl sm:text-5xl font-semibold leading-[72px] text-center">Why Drone Light ?</h2>
          <p className="text-soft-black text-2xl font-light text-center lg:text-left leading-[44px]">We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation.</p>
          <div className="w-full flex flex-wrap justify-between gap-y-[69px]">
            <ProductSpesification title="4K">Camera <br />Resolution</ProductSpesification>
            <ProductSpesification title="2 TB">Storage <br />Capacity</ProductSpesification>
            <ProductSpesification title="60 m/s">Super <br />Max Speed</ProductSpesification>
            <ProductSpesification title="30 mins">Long Flight <br />Time</ProductSpesification>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Product