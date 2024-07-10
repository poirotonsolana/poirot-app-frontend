"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'


const SingleAuditPage = () => {

const searchParams = useSearchParams();
const uniqueId = searchParams.get('id');
const auditDate = searchParams.get('date');
const auditStatus = searchParams.get('status');
const logoUrl = searchParams.get('logo');



  return (
    <>
      <div className='flex flex-col gap-16 items-center justify-center'>Audit: {uniqueId}
      {logoUrl && <Image src={logoUrl} alt={`Audit ${uniqueId} logo`} width={100} height={100} />}
        <p className='text-center'>Date: {auditDate}</p>
        <p className='text-center'>Status: {auditStatus}</p>
      </div>
    </>
   
  )
}

export default SingleAuditPage;