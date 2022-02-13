import Link from 'next/link'
import PropTypes from 'prop-types'

const HeaderNavigationItems = ({ items }) => {

  return (
    <>
      {items.map(({ text, url }, index) => (<Link href={url} key={index}><a className="text-lg uppercase text-white" >{text}</a></Link>))}
    </>
  )
}

HeaderNavigationItems.propTypes = {
  items : PropTypes.array.isRequired
}

export default HeaderNavigationItems