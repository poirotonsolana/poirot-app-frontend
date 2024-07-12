import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface AuditProps {
  id: number;
  name: string;
  status: string;
  logo: string;
  date: string;
  description:string;
  tags:string[];
  prizepool:string;
}

const Audit: React.FC<AuditProps> = ({ id, name, status, logo, date, description, tags, prizepool }) => {
  const queryParams = `?id=${id}&name=${encodeURIComponent(name)}&status=${status}&date=${date}&logo=${encodeURIComponent(logo)}&description=${encodeURIComponent(description)}&prizepool=${encodeURIComponent(prizepool)}`;

  return (
    
    <Link href={`/contests/${id}${queryParams}`}>
      <div className='border-2 rounded-2xl bg-gray-300 p-4 flex justify-between'>
        <Image src={logo} alt={`${name} logo`} width={48} height={48} className='w-12 h-12 mb-2 mix-blend-difference'/>
        <p className='text-center text-xl font-bold mt-2'>{name}</p>
        <div className='flex flex-row gap-4'>
          {tags.map((tag, index) => (
                <div key={index} className='bg-blue-500 text-white rounded-2xl  h-8 w-24 py-2 px-4 text-xs mt-2'>
                  <p className='font-bold text-center'>{tag}</p>
                </div>
              ))}
        </div> 
        <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-blue-500"></div>
         <p className='text-center text-lg mt-2 font-bold '>Valid until: {date}</p>
      </div>
    </Link>
  );
};

export default Audit;
