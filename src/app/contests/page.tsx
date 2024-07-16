import React from 'react';
import audits from '../../../data/audits';
import Audit from '../../../components/Audit';


const Contests = () => {
  const activeAudits = audits.filter(audit => audit.status === 'active');
  const upcomingAudits = audits.filter(audit => audit.status === 'upcoming');
  const completedAudits = audits.filter(audit => audit.status === 'completed');
  const judgedAudits = audits.filter(audit => audit.status === 'judging'); 

  return (
    <div className='flex flex-col items-center justify-center'>
      
      <div className='mt-8 w-full max-w-4xl'>
        <div>
          <h2 className='text-2xl font-bold'>Active Audits</h2>
          <ul className='flex flex-col gap-8 mt-10'>
            {activeAudits.map(audit => (
              <li key={audit.id} className='my-2 hover:scale-105 border-none bg-gray-200 rounded-2xl'>
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
        <div className='mt-10'>
          <h2 className='text-2xl font-bold'>Upcoming Audits</h2>
          <ul className='flex flex-col gap-8 mt-10'>
            {upcomingAudits.map(audit => (
              <li key={audit.id} className='my-2 hover:scale-105 bg-gray-200 rounded-2xl'>
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
        <div className='mt-10'>
          <h2 className='text-2xl font-bold'>Completed Audits</h2>
          <ul className='flex flex-col gap-8 mt-10'>
            {completedAudits.map(audit => (
              <li key={audit.id} className='my-2 hover:scale-105 bg-gray-200 rounded-2xl'>
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
        <div className='mt-10'>
          <h2 className='text-2xl font-bold'>Judged Audits</h2>
          <ul className='flex flex-col gap-8 mt-10'>
            {judgedAudits.map(audit => (
              <li key={audit.id} className='my-2 hover:scale-105 bg-gray-200 rounded-2xl'>
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
