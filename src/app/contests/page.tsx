import React from 'react';
import audits from '../../../data/audits';
import Audit from '../../../components/Audit';
import Image from 'next/image';
import logo from '../../../public/logo.png'

const Contests = () => {
  const activeAudits = audits.filter(audit => audit.status === 'active');
  const upcomingAudits = audits.filter(audit => audit.status === 'upcoming');
  const completedAudits = audits.filter(audit => audit.status === 'completed');
  const judgedAudits = audits.filter(audit => audit.status === 'judging'); 

  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={logo}
        alt='top-logo'
        width={100}
      />
      <div className='mt-8 w-full max-w-4xl'>
        <div>
          <h2 className='text-xl font-bold'>Active Audits</h2>
          <ul className='flex flex-col gap-8 mt-4'>
            {activeAudits.map(audit => (
              <li key={audit.id}>
                <Audit 
                  id={audit.id} 
                  name={audit.name} 
                  status={audit.status} 
                  logo={audit.logo} 
                  date={audit.date} 
                  description={audit.description}
                  tags={audit.tags}
                  prizepool={audit.prizepool}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-24'>
          <h2 className='text-xl font-bold'>Upcoming Audits</h2>
          <ul className='flex flex-col gap-8 mt-4'>
            {upcomingAudits.map(audit => (
              <li key={audit.id}>
                <Audit 
                  id={audit.id} 
                  name={audit.name} 
                  status={audit.status} 
                  logo={audit.logo} 
                  date={audit.date} 
                  description={audit.description}
                  tags={audit.tags}
                  prizepool={audit.prizepool}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-24'>
          <h2 className='text-xl font-bold'>Completed Audits</h2>
          <ul className='flex flex-col gap-8 mt-4'>
            {completedAudits.map(audit => (
              <li key={audit.id}>
                <Audit 
                  id={audit.id} 
                  name={audit.name} 
                  status={audit.status} 
                  logo={audit.logo} 
                  date={audit.date} 
                  description={audit.description}
                  tags={audit.tags}
                  prizepool={audit.prizepool}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-24'>
          <h2 className='text-xl font-bold'>Judged Audits</h2>
          <ul className='flex flex-col gap-8 mt-4'>
            {judgedAudits.map(audit => (
              <li key={audit.id}>
                <Audit 
                  id={audit.id} 
                  name={audit.name} 
                  status={audit.status} 
                  logo={audit.logo} 
                  date={audit.date} 
                  description={audit.description}
                  tags={audit.tags}
                  prizepool={audit.prizepool}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contests;
