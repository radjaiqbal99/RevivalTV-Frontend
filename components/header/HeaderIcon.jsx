import { useRouter } from 'next/router'

const HeaderIcon = () => { 
  
  const router = useRouter()
  
  return (
    <div className="md:flex-shrink-0 cursor-pointer" onClick={() => router.push('/')}>
      <svg width="75" height="35" viewBox="0 0 75 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37.5752 6.63873C35.9921 6.63873 34.4754 7.24368 33.324 8.29544L36.4399 11.4104C36.7636 11.1678 37.1559 11.0322 37.5752 11.0322C37.9944 11.0322 38.3867 11.1678 38.7104 11.4104L41.8261 8.29544C40.6748 7.24383 39.1582 6.63873 37.5752 6.63873Z" fill="white" />
        <path d="M37.575 0C34.2148 0 31.0113 1.28241 28.5869 3.55975L31.6985 6.6705C33.2999 5.21368 35.387 4.3933 37.5751 4.3933C39.7632 4.3933 41.8503 5.21368 43.4515 6.6705L46.5631 3.55975C44.1387 1.28255 40.9352 0 37.575 0Z" fill="white" />
        <path d="M56.25 7.22363V11.6169H63.4277V15.6207H11.5723V11.6169H18.75V7.22363H0V11.6169H7.17773V22.6192L24.3652 27.3054V32.5105H29.0527V35H33.4472V32.5105H41.5528V35H45.9473V32.5105H50.6348V27.3054L67.8223 22.6192V11.6169H75V7.22363H56.25Z" fill="white" />
      </svg>
    </div>
  )
}
export default HeaderIcon