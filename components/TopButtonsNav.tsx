"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import avatar from '../public/avatar-15.png'
import { CarouselPlugin } from './CarouselPlugin';

const TopButtonsNav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProfileClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className='flex flex-row gap-8 justify-end mt-4 fixed left-0 right-0'>
        <w3m-button />
        <button  className='rounded-2xl p-2 mr-4 text-white font-semibold bg-[#5773FF]' onClick={handleProfileClick}>
          User profile
        </button>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl flex flex-col items-center relative p-6">
            <button className="absolute top-3 right-3 px-2 py-1 rounded-md font-bold text-lg bg-blue-100" onClick={handleCloseModal}>X</button>
            <Image
              src={avatar}
              alt='avatar'
              width={100}
              height={100}
              className='m-auto'
            />
            <h1 className="text-xl text-center font-bold my-2">User</h1>
            <p className='text-center rounded-2xl font-bold text-lg mb-4' style={{ backgroundColor: "magenta", width: "25%" }}>Senior</p>
            <h2 className="text-xl text-center font-bold mb-4">Stats:</h2>
            <div className='flex flex-row border-2 p-6 rounded-2xl shadow-lg'>
              <div className='flex flex-col mr-6 gap-2 p-2'>
                <p className='text-lg font-bold'>High severity issues: 1</p>
                <p className='text-lg font-bold'>Medium severity issues: 2</p>
                <p className='text-lg font-bold'>Low severity issues: 3</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-lg font-bold mt-1'>Solo High: 5</p>
                <p className='text-lg font-bold'>Solo Medium: 7</p>
                <p className='text-lg font-bold'>First place: 9</p>
              </div>
            </div>
            <p className='mt-6 text-lg font-bold text-red-800'>Total rewards: 289.6K$</p>
            <p className='text-center font-bold my-4 text-lg'>Achievements:</p>
            <CarouselPlugin />
          </div>
        </div>
      )}
    </>
  )
}

export default TopButtonsNav;
