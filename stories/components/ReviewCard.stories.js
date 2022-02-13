import ReviewCard from "../../components/review/ReviewCard";

export default {
  title: 'Components/ReviewCard',
  component: ReviewCard 
}

export const Default = () => <ReviewCard cardProfilePicture="/hugo-adams.png" cardProfileName="Example Name" cardProfileJob="Example job">Example Content</ReviewCard>