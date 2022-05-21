import React from 'react';
import Image from 'next/image';
import { BeakerIcon, HomeIcon, ChevronDownIcon, SearchIcon, ChatIcon, BellIcon, PlusIcon, SpeakerphoneIcon, MenuIcon } from "@heroicons/react/solid";
import { StarIcon, SparklesIcon, GlobeIcon, VideoCameraIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="sticky flex top-0 z-50 bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image
          objectFit="contain" 
          src="https://links.papareact.com/fqy" 
          layout="fill" 
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex-1 flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-md px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input className="outline-none bg-transparent flex-1" type="text" placeholder="Search Reddit" />
        <button type="submit" hidden />
      </form>

      <div className="items-center text-gray-500 mx-5 space-x-2 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10 border border-gray-100" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
        <SpeakerphoneIcon className="icon" />
      </div>

      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
      </div>

      <div className="hidden items-center space-x-2 lg:flex border border-gray-100 p-2">
        <div className="relative h-5 w-5 flex-shrink-0">
          <Image 
            src="https://links.papareact.com/23l" 
            layout="fill"
            alt=""
          />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  )
}

export default Header
