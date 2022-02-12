import FooterListItem from "./FooterListItem"

const FooterList = ({ title, items }) => {
  return (
    <div className="w-fit flex-none flex flex-col space-y-[30px]">
      <h3 className="text-white font-semibold text-lg leading-[27px]">{title}</h3>
      <ul className="flex-none space-y-[15px]">
        {items.map(({ text, url }, index) => (<FooterListItem url={url} key={index}>{text}</FooterListItem>))}
      </ul>
    </div>
  )
}
export default FooterList