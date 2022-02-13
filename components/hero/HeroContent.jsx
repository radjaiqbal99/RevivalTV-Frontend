import Button from '../Button'

const HeroContent = () => { 
  return (
    <div className='min-w-[411px] max-w-[1440px] mx-auto bg-hero px-[30px] h-[650px] sm:h-[510px] xl:h-[640px] text-center pt-8'>
      <h1 className='text-4xl text-white leading-[54px]'>Representing Drone Light </h1>
      <p className="mt-4 max-w-[700px] mx-auto text-gray-400 text-lg leading-relaxed"><span className="inline md:block">Look up the sky and beautiful world with simple navigation.</span> Just record anmd get a lot memories to share, lighlty and fast like a lightning</p>
      <Button className='w-[120px] sm:w-[200px]' goTo='/detail/drone-light'>get now</Button>
    </div>
  )
}
export default HeroContent