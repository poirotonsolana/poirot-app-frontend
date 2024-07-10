import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface AuditProps {
  id: number;
  name: string;
  status: string;
  logo: string;
  date: string;
}

const Audit: React.FC<AuditProps> = ({ id, name, status, logo, date }) => {
  const queryParams = `?id=${id}&name=${encodeURIComponent(name)}&status=${status}&date=${date}&logo=${encodeURIComponent(logo)}`;

  return (
    
    <Link href={`/contests/${id}${queryParams}`}>
      <div className='w-96 border-2 rounded-2xl bg-gray-300 p-4 flex justify-between'>
        <Image src={logo} alt={`${name} logo`} width={48} height={48} className='w-12 h-12 mb-2 mix-blend-difference'/>
        <p className='text-center text-xl font-bold'>{name}</p>
        <p className='text-center text-sm'>{status}</p>
        <p className='text-center text-sm'>{date}</p>
      </div>
    </Link>
  );
};

export default Audit;
