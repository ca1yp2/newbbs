import React from 'react'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Register from './pages/Register'

const Main = ({title}) => {
  return (
    <div>
        <Header />
        <h1 className='text-center mt-5 mb-5'>{title}</h1>
        <Register />
        <Footer />
    </div>
  )
}
export default Main