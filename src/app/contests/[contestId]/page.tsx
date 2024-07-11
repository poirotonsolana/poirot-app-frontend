"use client"
import React, {useState} from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'


const SingleAuditPage = () => {

const searchParams = useSearchParams();
const uniqueId = searchParams.get('id');
const auditDate = searchParams.get('date');
const auditStatus = searchParams.get('status');
const logoUrl = searchParams.get('logo');
const auditDescription = searchParams.get('description')
const prizepool = searchParams.get('prizepool');



  return (
    <>
       {/* <div className='flex flex-col gap-16 items-center justify-center'>Audit: {uniqueId}
        {logoUrl && <Image src={logoUrl} alt={`Audit ${uniqueId} logo`} width={100} height={100} />}
        <p className='text-center'>Date: {auditDate}</p>
        <p className='text-center'>Status: {auditStatus}</p>
        <p className='text-center'>{auditDescription}</p>
      </div>  */}

      <nav className='flex flex-row justify-end gap-8'>
        <button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'>Connect wallet</button>
        <button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'>User profile</button>
      </nav>


      <div className='flex flex-row gap-28 justify-evenly mt-20'>


        <div className='flex flex-col'>

          <div className='flex flex-row items-center gap-8'>
            {logoUrl && <Image src={logoUrl} alt={`Audit ${uniqueId} logo`} width={100} height={100} />}
            Audit: {uniqueId}
          </div>

          <hr className='border-2 border-blue-400 mt-2 mb-4'/>
          
          <div>
            <p className='text-center'>{auditDescription}</p>
          </div>

        </div>


        <div className='flex flex-col'>

          <div className='flex flex-col gap-4'>
            <p>Prize pool: {prizepool}</p>
            <p>Duration: {auditDate}</p>
            <button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'>Join contest</button>
          </div>
          <hr className='border-2 border-blue-400 mt-2 mb-4'/>


          <div className='flex flex-col'>
            <p>Reported issues:</p>
            <p className='mt-4'>- No issues reported yet.</p>
          </div>


        </div>


      </div>

    </>
   
  )
}

export default SingleAuditPage;