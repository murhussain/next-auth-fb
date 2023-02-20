import React from 'react';
import Image from 'next/image';
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import HeaderIcon from './ui/header-icon';

export default function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md 
      justify-between'
    >
      {/* header left */}
      <div className='flex items-center'>
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt=""
        />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-6 text-gray-600'/>
          <input
            className='flex items-center ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink'
            type="text" 
            placeholder='Search Facebook'
          />
        </div>
      </div>

      {/* header center */}
      <div className='flex  justify-center flex-grow'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* header right */}
      <div>
        {/* profile image */}

        <p>My name</p>
      </div>
    </div>
  );
}