import Image from "next/image";
import React from 'react'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from "@heroicons/react/solid";
const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
              {/* left */}
            <div className="relative hidden w-24 lg:inline-grid cursor-pointer">
            <Image src="https://links.papareact.com/ocw" layout='fill' objectFit="contain"/>
              </div>
              <div className="relative  w-10 lg:hidden flex-shrink-0 cursor-pointer">
            <Image src="https://links.papareact.com/jjm" layout='fill' objectFit="contain"/>
              </div>
      {/* middle */}
      <div className=" max-w-xs">
      <div className="relative mt-1 p-3 rounded-md ">
        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-500"/>
        </div>
        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-indigo-300 rounded-md focus:ring-black focus:border-black" input='text' placeholder="search"></input>
         </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4">

          <HomeIcon className="navbtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navbtn">
            <PaperAirplaneIcon className="navbtn rotate-45" />
            <div className="absolute bg-red-500 rounded-full h-5 w-5 flex items-center justify-center -top-1 -right-3 text-xs text-white animate-pulse">3</div>
            </div>
          <PlusCircleIcon className="navbtn" />
          <UserGroupIcon className="navbtn" />
          <HeartIcon className="navbtn" />
          <img src="https://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic-3.jpg" alt="profile pic" className="h-10 rounded-full cursor-pointer"/>
        </div>
      </div>
      </div>
  )
}

export default Header