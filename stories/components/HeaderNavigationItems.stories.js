import HeaderNavigationItems from "../../components/header/HeaderNavigationItems";

export default {
  title: 'Components/HeaderNavigationItems',
  component: HeaderNavigationItems 
}

const navItemState = [
    {
      url: '/#',
      text: 'home',
    },
    {
      url: '/#gallery',
      text: 'gallery',
    },
    {
      url: '/#products',
      text: 'products',
    },
    {
      url: '/#review',
      text: 'review',
    },
    {
      url: '/#support',
      text: 'support',
    }
  ]

export const Default = () => <HeaderNavigationItems items={navItemState} />