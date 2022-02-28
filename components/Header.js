import Image from "next/image";
import React from 'react'

const Header = () => {
  return (
      <div>
        <div className='flex justify-between max-w-6xl'>
            <div className="relative hidden w-24 h-24 lg:inline-grid">
            <Image src="https://links.papareact.com/ocw" layout='fill' objectFit="contain"/>
              </div>
              <div className="relative  w-10 h-10 lg:hidden flex-shrink-0">
            <Image src="https://links.papareact.com/jjm" layout='fill' objectFit="contain"/>
              </div>
        </div>  
      </div>
    
  )
}

export default Header