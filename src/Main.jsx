import React from 'react'
import Header from './pages/Header'
// import Footer from './pages/Footer'
// import Register from './pages/Register'
import Detail from './pages/Detail'

const Main = ({title}) => {
  return (
    <div>
        <Header />
        <h1 className='text-center mt-5 mb-5'>{title}</h1>
        {/* <Register /> */}
        {/* <Detail /> */}
        <Footer />
    </div>
  )
}
export default Main