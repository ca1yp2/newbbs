import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'

const Main = ({title}) => {
  return (
    <div>
        <Header />
        <h1 className='text-center mt-5 mb-4'>{title}</h1>
        <Footer />
    </div>
  )
}
export default Main