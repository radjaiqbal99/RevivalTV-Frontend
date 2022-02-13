import FooterList from "../../components/footer/FooterList";

export default {
  title: 'Components/FooterList',
  component: FooterList 
}

const itemListState = {
    example: [
      {
        text: "Example",
        url: "#"
      },
      {
        text: "Example",
        url: "#"
      },
    ],
  }

export const Default = () =>  <FooterList title="Example" items={itemListState['example']} />