const FooterListItem = ({ children, url }) => {
  return (
    <li className="text-white font-light text-lg leading-[27px]">{url === 'none' ? children : (<a className="hover:underline hover:underline-offset-8" href={url}>{children}</a>) }</li>
  )
}
export default FooterListItem