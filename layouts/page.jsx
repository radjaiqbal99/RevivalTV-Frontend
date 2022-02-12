import Header from './top-menu/Header'
import Footer from './top-menu/Footer'

const Page = ({ children }) => { 
  return (
    <>
      {/* Header Page*/}
      <Header />
      {/* Content Page */}
      <main>
        {/* Slot */}
        { children }
      </main>
      {/* Footer Page */}
      <Footer/>
    </>
  )
}
export default Page