"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import avatar from '../public/avatar-15.png'

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
        <button className='rounded-2xl p-2 font-bold' style={{ backgroundColor: "cornsilk" }}>Connect wallet</button>
        <button className='rounded-2xl p-2 mr-4 font-bold' style={{ backgroundColor: "cornsilk" }} onClick={handleProfileClick}>User profile</button>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-4xl flex flex-col items-center">
            <Image
              src={avatar}
              alt='avatar'
              width={150}
              height={50}
              className='m-auto'
            />
            <h1 className="text-2xl text-center font-bold my-6">User</h1>
            <p className='text-center rounded-2xl font-bold text-xl mb-6' style={{ backgroundColor: "magenta", width: "15%" , marginTop:"30px", marginBottom:"30px"}}>Senior</p>
            <h2 className="text-xl text-center font-bold mb-6">Stats:</h2>
            <p className='my-12'>Total rewards: 289.6K$</p>
            <div className='flex items-center justify-center mb-4'>
              <button className="mt-4 px-4 py-2 rounded-2xl font-bold" style={{ backgroundColor: "cyan" }} onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TopButtonsNav;
