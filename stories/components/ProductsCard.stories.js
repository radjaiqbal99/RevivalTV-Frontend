import ProductsCard from "../../components/products/ProductsCard";

export default {
  title: 'Components/ProductsCard',
  component: ProductsCard 
}

export const Default = () =>  <ProductsCard cardImage="/mini-drone.png" cardTitle="Example Titile" cardAction="/">Example Content</ProductsCard>