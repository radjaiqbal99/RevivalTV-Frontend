import HeaderNavigationItems from './HeaderNavigationItems'

const HeaderNavigation = () => {

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

  return (
    <nav className="md:flex flex-shrink-0 gap-[30px] lg:gap-[50px] xl:gap-[100px] hidden ">
      <HeaderNavigationItems items={navItemState} />
    </nav>
  )
}
export default HeaderNavigation