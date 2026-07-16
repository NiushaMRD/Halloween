import Header from '@/components/header/Header'
import React from 'react'
import Footer from "@/components/header/footer/Footer";


function Rootlayout({children}) {
  return (
    <div>
        <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Rootlayout
