import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AuditProps {
  id: number;
  name: string;
  status: string;
  logo: string;
  date: string;
  description: string;
  tags: string[];
  prizepool: string;
}

const Audit: React.FC<AuditProps> = ({ id, name, status, logo, date, description, tags, prizepool }) => {
  const queryParams = `?id=${id}&name=${encodeURIComponent(name)}&status=${status}&date=${date}&logo=${encodeURIComponent(logo)}&description=${encodeURIComponent(description)}&prizepool=${encodeURIComponent(prizepool)}`;

  return (
    <Link href={`/contests/${id}${queryParams}`}>
      <div className='border-2 rounded-2xl bg-transparent p-10 flex justify-between max-w-4xl max-h-40 mx-auto'>
        <div className='flex flex-row gap-6 mr-28'>
          <Image src={logo} alt={`${name} logo`} width={48} height={48} className='w-14 h-14 mb-2' />
          <p className='text-center text-xl font-bold mt-4'>{name}</p>
        </div>
        <div className="ml-28 inline-block h-[65px] min-h-[1em] w-0.5 self-stretch bg-blue-500"></div>
        <div className='flex flex-row gap-4 mr-2'>
          {tags.map((tag, index) => (
            <div key={index} className='bg-blue-500 text-white rounded-2xl h-8 w-24 py-2 px-4 text-xs mt-4'>
              <p className='font-bold text-center'>{tag}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-left text-md mt-2 font-bold'>Valid until: {date}</p>
          <p className='text-left text-md mt-2 font-bold'>Prize pool: {prizepool}</p>
        </div>
      </div>
    </Link>
  );
};

export default Audit;
