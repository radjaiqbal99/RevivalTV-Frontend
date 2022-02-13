import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import HeaderIcon from './HeaderIcon'
import HeaderNavigation from "./HeaderNavigation"

const HeaderBurgerMenu = () => {

  const [offCanvas, setOffCanvas] = useState(false)

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
    <>
      <div className="flex-shrink-0 cursor-pointer" onClick={()=> setOffCanvas(true)}>
        <img src="/burger-menu-icon.svg" alt="Icon" />
      </div>
      <div className={classNames("fixed left-0 w-full h-[350px] bg-soft-black opacity-100 z-50 transition-all duration-700", offCanvas ? 'top-0' : '-top-full')}>
        <nav className="flex flex-col items-start gap-y-[32px] px-[30px] pt-[50px] relative">
          <div className="absolute top-[50px] right-[30px] cursor-pointer">
            <img src="/x-icon.svg" alt="Icon" onClick={() => setOffCanvas(false)} />
          </div>
          {navItemState.map(({ text, url }, index) => (<Link href={url} key={index} ><a className="text-lg uppercase text-white" onClick={() => setOffCanvas(false)}>{text}</a></Link>))}
        </nav>
      </div>
    </>
  )
}
export default HeaderBurgerMenu