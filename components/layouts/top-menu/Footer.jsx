import FooterCompanyProfile from "../../footer/FooterCompanyProfile"
import FooterList from "../../footer/FooterList"

const Footer = () => {

  const itemListState = {
    explore: [
      {
        text: "Our Services",
        url: "#"
      },
      {
        text: "Specification",
        url: "#"
      },
      {
        text: "Refund",
        url: "#"
      },
      {
        text: "Playlist",
        url: "#"
      },
    ],
    account: [
      {
        text: "My Account",
        url: "#"
      },
      {
        text: "Top Benefit",
        url: "#"
      },
      {
        text: "How-to Tutorials",
        url: "#"
      },
      {
        text: "Moment",
        url: "#"
      },
    ],
    office: [
      {
        text: "+021 2208 1996",
        url: "none"
      },
      {
        text: "SCBD, Jakarta",
        url: "none"
      },
      {
        text: "No.2 (Autodrone)",
        url: "none"
      },
      {
        text: "support@autodrone.id",
        url: "none"
      },
    ]
  }

  return (
    <footer id="support" className="bg-black mx-0 min-w-[411px]">
      <div className="min-w-[411px] max-w-[1440px] mx-auto flex flex-col sm:flex-row px-[30px] xl:px-[150px] py-[50px] xl:py-[100px] gap-y-[32px]">
        <FooterCompanyProfile />
        <div className="flex flex-col sm:flex-row flex-wrap gap-x-[80px] gap-y-[50px]">
          <FooterList title="Explore" items={itemListState['explore']} />
          <FooterList title="Account" items={itemListState['account']} />
          <FooterList title="Office" items={itemListState['office']} />
        </div>
      </div>
    </footer>
  )
}
export default Footer