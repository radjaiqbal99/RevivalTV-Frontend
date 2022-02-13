import PropTypes from 'prop-types'
import classNames from "classnames"
import { useRouter } from 'next/router'

const Button = ({ children, className, goTo }) => {

  const router = useRouter()

  return (
    <button className={classNames(className, 'uppercase text-white bg-primary hover:opacity-80 h-[50px] rounded-full text-lg font-semibold mt-4 outline-none transition-all')} onClick={() => goTo === 'order' ? alert(`You just buy the awesome drone`) : router.push(goTo)}>{children}</button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  goTo: PropTypes.string.isRequired
}
Button.defaultProps = {
  className : 'w-[200px]'
}

export default Button