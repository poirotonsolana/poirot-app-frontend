import React from 'react'

const page = ({params}: {params: {contestId: number}}) => {
  return (
    <div className='flex items-center justify-center'>Audit: {params.contestId}</div>
  )
}

export default page;