"use client"
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from "react-toastify";

const SingleAuditPage = () => {
  const searchParams = useSearchParams();
  const auditName = searchParams.get('name');
  const uniqueId = searchParams.get('id');
  const auditDate = searchParams.get('date');
  const auditStatus = searchParams.get('status');
  const logoUrl = searchParams.get('logo');
  const auditDescription = searchParams.get('description');
  const prizepool = searchParams.get('prizepool');

  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // State to toggle between sign-in and sign-up forms
  const [reportedBugs, setReportedBugs] = useState<{ projectName: string; bugSeverity: string; description: string; contactInfo: { twitter: string; telegram: string; email: string; discord: string; }; }[]>([]);
  const [preferredCommunication, setPreferredCommunication] = useState('');

  const handleJoinClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Contest joined successfully!");
      setIsJoined(true);
      setIsLoading(false);
    }, 2000); 
  }

  const handleReportClick = () => {
    setIsReporting(true);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const bugData = {
      projectName: formData.get('projectName') as string,
      bugSeverity: formData.get('bugSeverity') as string,
      description: formData.get('bugDescription') as string,
      contactInfo: {
        twitter: formData.get('twitter') as string,
        telegram: formData.get('telegram') as string,
        email: formData.get('email') as string,
        discord: formData.get('discord') as string,
      }
    };
    setReportedBugs([...reportedBugs, bugData]);
    setIsReporting(false);
    toast.success("Bug reported successfully!");
  }

  const handleCommunicationChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setPreferredCommunication(e.target.value);
  }

  const handleProfileClick = () => {
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
  }

  const handleSignInSignUpSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    toast.success(`${isSignIn ? 'Sign-in' : 'Sign-up'} successful!`);
    setIsModalOpen(false);
  }

  return (
    <>
      <nav className='flex flex-row justify-start gap-8'>
        <button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-600 font-bold'>Connect wallet</button>
        <button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-600 font-bold' onClick={handleProfileClick}>User profile</button>
      </nav>

      <div className='flex flex-row gap-28 justify-evenly mt-36 border-t-2 border-b-2 rounded-2xl py-32'>
        <div className='flex flex-col'>
          <div className='flex flex-row items-center gap-8'>
            {logoUrl && <Image src={logoUrl} alt={`Audit ${uniqueId} logo`} width={100} height={100} />}
            <p className='font-bold text-lg'>{auditName}</p>
          </div>
          <hr className='w-96 h-1 my-4 bg-gray-300'/>
          <div>
            <p className='text-md mt-4'>{auditDescription}</p>
          </div>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col gap-4'>
            <p>Prize pool: {prizepool}</p>
            <p>Duration: {auditDate}</p>
            {(auditStatus === 'active' || auditStatus === 'upcoming') && !isJoined ? (
              <button 
                className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold' 
                onClick={handleJoinClick}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Join contest'}
              </button>
            ) : (
              isJoined && (
                <div className='flex gap-4'>
                  <Link href={"https://github.com/poirotonsolana"} target='_blank'><button className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'>View repo</button></Link>
                  <button 
                    className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold' 
                    onClick={handleReportClick}
                  >
                    Report a bug
                  </button>
                </div>
              )
            )}
          </div>
          <hr className='w-96 my-4 bg-gray-300 h-1'/>
          <div className='flex flex-col'>
            <p>Reported issues:</p>
            <ul className='mt-4'>
              {reportedBugs.length === 0 ? (
                <p>- No issues reported yet.</p>
              ) : (
                reportedBugs.map((bug, index) => (
                  <li key={index} className='mb-2'>
                    <strong>Issue #{index + 1}:</strong><br />
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
            <h2 className='text-xl mb-8 text-center font-bold'>Report a Bug</h2>
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

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-6 rounded-lg'>
            <h2 className='text-xl mb-8 text-center font-bold'>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
            <div className='flex justify-center mb-4'>
              <button 
                className={`mr-4 border-2  p-2 rounded-xl ${isSignIn ? 'font-bold bg-green-200 rounded-xl p-2' : ''}`} 
                onClick={() => setIsSignIn(true)}
              >
                Sign In
              </button>
              <button 
                className={`border-2  p-2 rounded-xl ${!isSignIn ? 'font-bold bg-green-200 rounded-xl p-2' : ''}`} 
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </button>
            </div>
            <form onSubmit={handleSignInSignUpSubmit}>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='email'>
                  Email
                </label>
                <input 
                  id='email' 
                  name='email'
                  type='email'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  required
                />
              </div>
              <div className='mb-4'>
                <label className='block text-sm font-bold mb-2' htmlFor='password'>
                  Password
                </label>
                <input 
                  id='password' 
                  name='password'
                  type='password'
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                  required
                />
              </div>
              {!isSignIn && (
                <>
                  <div className='mb-4'>
                    <label className='block text-sm font-bold mb-2' htmlFor='confirmPassword'>
                      Confirm Password
                    </label>
                    <input 
                      id='confirmPassword' 
                      name='confirmPassword'
                      type='password'
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-sm font-bold mb-2' htmlFor='username'>
                      Username
                    </label>
                    <input 
                      id='username' 
                      name='username'
                      className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                      required
                    />
                  </div>
                </>
              )}
              <div className='flex justify-end'>
                <button 
                  type='submit' 
                  className='bg-blue-300 rounded-2xl w-36 p-1 hover:bg-blue-500 font-bold'
                >
                  {isSignIn? "Sign in": "Sign up"}
                </button>
                <button 
                  type='button' 
                  className='bg-gray-300 rounded-2xl w-36 p-1 hover:bg-gray-500 font-bold ml-4'
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleAuditPage;
