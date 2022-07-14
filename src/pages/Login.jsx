import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';
import { useState } from 'react';
// import { Link,  } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth()
  const navigate = useNavigate()



  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await logIn(email, password)
      navigate('/')
    }
    catch (error) {
      console.log(error)
      setError(error.message)
    }
  };
  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5fd505fa-f425-4a18-b3cc-00dd2638f541/d638b1fe-b44f-4cb3-b5d8-2106904c3be0/IN-en-20220704-popsignuptwoweeks-perspective_alpha_website_medium.jpg" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-15 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto mt-20 bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16 '>
              <h1 className='text-3xl font-bold'>Sign In </h1>
              {error ? <p className='p-3 bg-red-400 my-2 mt-5'>{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-none' type='email' placeholder='Email' autoComplete='email' />
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-none' type='password' placeholder='Password' autoComplete='current-password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                <div className='flex justify-between items-cemter text-sm text-gray-600'>
                  <p>
                    <input type='checkbox' name='' id='' />&nbsp;&nbsp;Remember Me
                  </p>
                  <p>Need Help</p>
                </div>
                <p className='py-8 text-sm flex '><span className='text-gray-600'>New to Netflix? &nbsp;</span>{''}
                  <Link to='/signup' >
                    <p className='text-red-600'>Sign Up</p>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login