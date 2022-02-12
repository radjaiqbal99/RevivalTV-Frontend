import classNames from "classnames"
import { useRouter } from 'next/router'

const Button = ({ children, className = 'w-[200px]', goTo }) => {
  
  const router = useRouter()

  return (
    <button className={classNames(className, 'uppercase text-white bg-primary hover:opacity-80 h-[50px] rounded-full text-lg font-semibold mt-4 outline-none transition-all')} onClick={() => router.push(goTo)}>{children}</button>
  )
}
export default Button