import React from 'react'
import Image from 'next/image';
import logo from '../../../public/leaderboard.jpeg'

const Leaderboard = () => {
  return (
    <div className='m-auto w-full'>
      <p className='font-bold text-2xl text-center mt-20 text-teal-800'>Poirot leaderboard will be determined after the first 10 competitions.</p>
      <Image
        src={logo}
        alt='leaderboard-explained'
        className='mx-auto'
      />
    </div>
  )
}

export default Leaderboard;