import React, { useState } from 'react'

const Login = () => {
  
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState(null)
  const [ isLoggingIn, setIsLoggingIn ] = useState(true)
  
  const submitHandler = () => {
    if (!email || !password) { 
      setError('Please enter email and password')
      return
    }
  }

  const changeEmailHandler = (e) => {
    setError('')
    setEmail(e.target.value)
  }

  const changePasswordHandler = (e) => {
    setError('')
    setPassword(e.target.value)
  }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4'>
      <h1 className='font-extrabold text-2xl sm:text-4xl select-none uppercase'>{isLoggingIn ? 'Login' : 'Register' }</h1>
      <input value={email} onChange={changeEmailHandler} type="text" placeholder='E-mail' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]' />
      <input value={password} onChange={changePasswordHandler} type="text" placeholder='Password' className='outline-none duration-300 border-b-2 border-solid border-white focus:border-cyan-300 text-slate-900 p-2 w-full max-w-[40ch]' />
      <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900'><h2 className='relative z-20'>SUBMIT</h2></button>
      {error && <div className='w-full max-w-[40ch] text-center border border-solid border-rose-300 text-rose-300 py-2' >{error}</div>}
      <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={() => setIsLoggingIn(!isLoggingIn)} >{! isLoggingIn ? 'Login' : 'Register'}</h2>
    </div>
  )
}

export default Login
