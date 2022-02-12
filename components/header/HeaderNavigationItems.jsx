import Link from 'next/link'

const HeaderNavigationItems = ({ items }) => {

  return (
    <>
      {items.map(({ text, url }, index) => (<Link href={url} key={index}><a className="text-lg uppercase text-white" >{text}</a></Link>))}
    </>
  )
}
export default HeaderNavigationItems