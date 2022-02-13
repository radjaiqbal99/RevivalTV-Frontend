import PropTypes from 'prop-types'
import Header from './top-menu/Header'
import Footer from './top-menu/Footer'

const Page = ({ children }) => { 
  return (
    <>
      {/* Header Page*/}
      <Header />
      {/* Content Page */}
      <main className='min-h-[100vh]'>
        { children }
      </main>
      {/* Footer Page */}
      <Footer/>
    </>
  )
}

Page.propTypes = {
  children : PropTypes.node
}

export default Page