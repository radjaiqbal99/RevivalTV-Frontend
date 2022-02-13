import DetailProductDescriptionFeature from "../../components/detail-product/detail-product-description/DetailProductDescriptionFeature";

export default {
  title: 'Components/DetailProductDescriptionFeature',
  component: DetailProductDescriptionFeature 
}

export const Default = () => <DetailProductDescriptionFeature items={[{icon:'camera-icon.png', text:'Example text'}] }/>