import ProductsCard from "./ProductsCard"

const ProductsCarousel = () => {
  return (
    <div className="products-scrolling mt-[50px] mx-[30px] md:mx-0 md:px-[54vh] md:snap-x md:snap-mandatory md:overflow-x-scroll flex flex-col items-center md:flex-row gap-[50px]">
      <ProductsCard cardImage="/mini-drone.png" cardTitle="Mini Drone" cardAction="/detail/mini-drone">Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.</ProductsCard>
      <ProductsCard cardImage="/drone-light-bg-black.png" cardTitle="Drone Light" cardAction="/detail/drone-light">Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.</ProductsCard>
      <ProductsCard cardImage="/phantom-drone-1.png" cardTitle="Phantom Drone" cardAction="/detail/phantom drone">Inspired by phantom, drone can move faster and quickly like a ghost. Focus on speed so you can investigate environtment quickly.</ProductsCard>
    </div>
  )
}
export default ProductsCarousel