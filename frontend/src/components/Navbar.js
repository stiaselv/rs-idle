import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/')
  }

  const isLogged = useSelector(state => state.isLoggedIn);

  return (
    <nav className='flex justify-between px-4 bg-gray-700 w-screen z-50 border-b items-center border-black'>
      <div>
        <button className="relative group">
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
    
              <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div>
        <figure>
          <img src='https://cdn.discordapp.com/attachments/222195714028077067/1061111271686152193/Logo_blank.png' alt='App-Logo' className='h-36 w-76' onClick={ handleLogout }></img>
        </figure>
      </div>
      <div className='hidden space-x-8 lg:flex'>
          <button className='w-20 rounded-md h-8 bg-gray-300' onClick={ handleLogout }>Logout</button>
      </div>
    </nav>
    )
}

export default Navbar