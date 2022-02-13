import { useRouter } from 'next/router'

const HeaderIcon = () => { 
  
  const router = useRouter()
  
  return (
    <div className="md:flex-shrink-0 cursor-pointer" onClick={() => router.push('/')}>
      <img src="/drone-icon.svg" alt="Drone icon" />
    </div>
  )
}
export default HeaderIcon