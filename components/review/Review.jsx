import ReviewCard from "./ReviewCard"

const Support = () => {
  return (
    <section id="review" className="mx-0">
      <div className="max-w-[1440px] mx-auto space-y-[37px] xl:space-y-20 pt-[50px] pb-[100px] px-[30px] xl:px-[150px]">
        <h2 className="font-semibold text-soft-black text-4xl sm:text-[64px] leading-[62px] sm:leading-[104px]">What Our “Pilots <br />Are Saying</h2>
        <div className="flex flex-wrap items-center justify-start gap-[30px]">
          <ReviewCard cardProfilePicture="/hugo-adams.png" cardProfileName="Hugo Adams" cardProfileJob="Content Craetor">With high resolution camera, picture become clear and beautiful. It’s so easy to operate drone.</ReviewCard>
          <ReviewCard cardProfilePicture="/jennie-obrien.png" cardProfileName="Jennir Obrien" cardProfileJob="Director Film">Taking high view video become easy and faster. Battery performance really helping for making film.</ReviewCard>
          <ReviewCard cardProfilePicture="/lisa-milz.png" cardProfileName="Lisa Millz" cardProfileJob="Content WQCreator">Making video content for my trip vlog so powerful and wonderful. Love the video quality.</ReviewCard>
        </div>
      </div>
    </section>
  )
}
export default Support