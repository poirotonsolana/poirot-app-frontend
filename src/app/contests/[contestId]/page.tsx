"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const SingleAuditPage = () => {
  const searchParams = useSearchParams();
  const uniqueId = searchParams.get('id');
  const auditDate = searchParams.get('date');
  const auditStatus = searchParams.get('status');
  const logoUrl = searchParams.get('logo');
  const auditDescription = searchParams.get('description')
  const prizepool = searchParams.get('prizepool');

  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [reportedBugs, setReportedBugs] = useState<{ projectName: string | null; bugSeverity: string | null; description: string | null; contactInfo: { twitter: string | null; telegram: string | null; email: string | null; discord: string | null; } }[]>([]);
  const [preferredCommunication, setPreferredCommunication] = useState('');

  const handleJoinClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsJoined(true);
      setIsLoading(false);
    }, 2000); 
  }

  const handleReportClick = () => {
    setIsReporting(true);
  }

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const bugData = {
      projectName: formData.get('projectName'),
      bugSeverity: formData.get('bugSeverity'),
      description: formData.get('bugDescription'),
      contactInfo: {
        twitter: formData.get('twitter'),
        telegram: formData.get('telegram'),
        email: formData.get('email'),
        discord: formData.get('discord')
      }
    };
    setReportedBugs([...reportedBugs, bugData]);
    setIsReporting(false);
  }

  const handleCommunicationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPreferredCommunication(e.target.value);
  }

  return (
    <>
      <nav className='flex flex-row justify-end gap-8'>
        <button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'>Connect wallet</button>
        <button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'>User profile</button>
      </nav>
      

      <div className='flex flex-row gap-28 justify-evenly mt-36 border-t-2 border-b-2 rounded-2xl py-8'>
        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-8'>
            {logoUrl && <Image src={logoUrl} alt={`Audit ${uniqueId} logo`} width={100} height={100} />}
            Audit: {uniqueId}
          </div>
          <hr className='w-48 h-1 my-4 bg-gray-300'/>
          <div>
            <p className='text-center'>{auditDescription}</p>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col gap-4'>
            <p>Prize pool: {prizepool}</p>
            <p>Duration: {auditDate}</p>
            {!isJoined ? (
              <button 
                className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold' 
                onClick={handleJoinClick}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Join contest'}
              </button>
            ) : (
              <div className='flex gap-4'>
                <Link href={"https://github.com/poirotonsolana"} target='_blank'><button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'>View repo</button></Link>
                <button 
                  className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold' 
                  onClick={handleReportClick}
                >
                  Report bug
                </button>
              </div>
            )}
          </div>
          <hr className='w-48 my-4 bg-gray-300 h-1'/>
          <div className='flex flex-col'>
            <p>Reported issues:</p>
            <ul className='mt-4'>
              {reportedBugs.length === 0 ? (
                <p>- No issues reported yet.</p>
              ) : (
                reportedBugs.map((bug, index) => (
                  <li key={index + 1} className='mb-2'>
                    <strong>Issue #{index}:</strong><br />
                    <strong>Project:</strong> {bug.projectName} <br/>
                    <strong>Severity:</strong> {bug.bugSeverity} <br/>
                    <strong>Description:</strong> {bug.description} <br/>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>

      {isReporting && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-xl mb-4'>Report a Bug</h2>
            <form onSubmit={handleFormSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='projectName'>
                  Project Name
                </label>
                <input 
                  id='projectName' 
                  name='projectName'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='bugSeverity'>
                  Bug Severity
                </label>
                <select 
                  id='bugSeverity' 
                  name='bugSeverity'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  required
                >
                  <option value='Low'>Low</option>
                  <option value='Medium'>Medium</option>
                  <option value='High'>High</option>
                  <option value='Critical'>Critical</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='bugDescription'>
                  Description
                </label>
                <textarea 
                  id='bugDescription' 
                  name='bugDescription'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='preferredCommunication'>
                  Preferred Communication Channel
                </label>
                <select 
                  id='preferredCommunication' 
                  name='preferredCommunication'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  onChange={handleCommunicationChange}
                  required
                >
                  <option value=''>Select an option</option>
                  <option value='twitter'>Twitter</option>
                  <option value='telegram'>Telegram</option>
                  <option value='email'>Email</option>
                  <option value='discord'>Discord</option>
                </select>
              </div>
              {preferredCommunication && (
                <div className='mb-4'>
                  <label className='block text-sm font-bold mb-2' htmlFor={preferredCommunication}>
                    {preferredCommunication.charAt(0).toUpperCase() + preferredCommunication.slice(1)}
                  </label>
                  <input 
                    id={preferredCommunication} 
                    name={preferredCommunication}
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    placeholder={`Enter your ${preferredCommunication} handle`}
                    required
                  />
                </div>
              )}
              <div className='flex justify-end'>
                <button 
                  type='submit' 
                  className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'
                >
                  Submit
                </button>
                <button 
                  type='button' 
                  className='bg-gray-300 rounded-2xl w-36 p-1 hover:bg-gray-500 font-bold ml-4'
                  onClick={() => setIsReporting(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default SingleAuditPage;
