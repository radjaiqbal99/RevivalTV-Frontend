import ProductsCarousel from "./ProductsCarousel"

const Products = () => { 
  return (
    <section id="products" className="mx-0 py-[30px] xl:py-[50px] overflow-hidden">
      <div className="flex flex-col gap-4 text-center px-[30px]">
        <h2 className="text-soft-black text-4xl font-semibold leading-[54px]">New Products</h2>
        <p className="text-gray-400 text-base font-light leading-loose"><span className="sm:block">New innovation, best quality than before.</span> Make every moment flying operation become unforgettable.</p>
      </div>
      <ProductsCarousel/>
    </section>
  )
}
export default Products