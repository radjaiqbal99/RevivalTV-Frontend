import GalleryCard from "./GalleryCard"

const Gallery = () => { 
  return (
    <section id="gallery" className="mx-0">
      <div className="min-w-[411px] max-w-[1440px] mx-auto p-[30px] flex flex-col lg:flex-row gap-5">
        <GalleryCard backgroundImage="/gallery-img-1.png" color="black" cardTitle="Ultra Light" cardBody="Drone move faster with weighing component" cardBodyStrong="under 200 g" />
        <GalleryCard backgroundImage="/gallery-img-2.png" color="white" cardTitle="Best Resolution" cardBody="Take a beautiful view with best camera up to" cardBodyStrong="4K Camera Resolution" />
      </div>
    </section>
  )
}
export default Gallery