import React from 'react'
import Link from 'next/link';

export const audits = [
  { id: 1, name: 'Audit 1' },
  { id: 2, name: 'Audit 2' },
  { id: 3, name: 'Audit 3' },
];

const Contests = () => {
  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <p className='text-2xl font-bold'>Contests page</p>
      <ul className='mt-8'>
        {audits.map((audit) => (
          <li key={audit.id}>
            <Link href={`/contests/${audit.id}`}>
              <p>{audit.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    </>
  
    

    
  )
}

export default Contests;