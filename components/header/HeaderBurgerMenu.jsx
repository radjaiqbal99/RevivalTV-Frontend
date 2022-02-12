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
        <svg width="30" height="30" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1.33514e-05C0.734784 1.33514e-05 0.48043 0.111756 0.292893 0.310658C0.105357 0.50956 0 0.779329 0 1.06062C0 1.34191 0.105357 1.61168 0.292893 1.81058C0.48043 2.00948 0.734784 2.12123 1 2.12123H17C17.2652 2.12123 17.5196 2.00948 17.7071 1.81058C17.8946 1.61168 18 1.34191 18 1.06062C18 0.779329 17.8946 0.50956 17.7071 0.310658C17.5196 0.111756 17.2652 1.33514e-05 17 1.33514e-05H1ZM0 7.42426C0 7.14297 0.105357 6.8732 0.292893 6.67429C0.48043 6.47539 0.734784 6.36365 1 6.36365H17C17.2652 6.36365 17.5196 6.47539 17.7071 6.67429C17.8946 6.8732 18 7.14297 18 7.42426C18 7.70555 17.8946 7.97532 17.7071 8.17422C17.5196 8.37312 17.2652 8.48486 17 8.48486H1C0.734784 8.48486 0.48043 8.37312 0.292893 8.17422C0.105357 7.97532 0 7.70555 0 7.42426ZM0 13.7879C0 13.5066 0.105357 13.2368 0.292893 13.0379C0.48043 12.839 0.734784 12.7273 1 12.7273H17C17.2652 12.7273 17.5196 12.839 17.7071 13.0379C17.8946 13.2368 18 13.5066 18 13.7879C18 14.0692 17.8946 14.339 17.7071 14.5379C17.5196 14.7368 17.2652 14.8485 17 14.8485H1C0.734784 14.8485 0.48043 14.7368 0.292893 14.5379C0.105357 14.339 0 14.0692 0 13.7879Z" fill="white" />
        </svg>
      </div>
      <div className={classNames("fixed left-0 w-full h-[400px] bg-soft-black opacity-100 z-50 transition-all ease-in duration-400", offCanvas ? 'top-0' : '-top-full')}>
        <nav className="flex flex-col items-start gap-y-[32px] px-[30px] pt-[50px] relative">
          <svg className="text-white absolute top-[50px] right-[30px] cursor-pointer" onClick={() => setOffCanvas(false)} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          {navItemState.map(({ text, url }, index) => (<Link href={url} key={index} ><a className="text-lg uppercase text-white" onClick={() => setOffCanvas(false)}>{text}</a></Link>))}
        </nav>
      </div>
    </>
  )
}
export default HeaderBurgerMenu