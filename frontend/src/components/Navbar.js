import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    if (isLogged === true) {
      navigate('/bank')
    } else {
      navigate('/')
    }
  }

  const handleLogout = () => {
    dispatch({
      type: 'SET_LOGIN',
      payload: false

    })
    navigate('/')
  }

  const isLogged = useSelector((state) => state.isLoggedIn)

  return (
    <nav className='flex justify-between px-4 bg-gray-700 w-screen z-50 border-b items-center border-black'>
      {isLogged ?
        <div className='w-48'></div>
      : <div></div> }
      <div>
        <figure>
          <img src='https://cdn.discordapp.com/attachments/222195714028077067/1061111271686152193/Logo_blank.png' alt='App-Logo' className='h-36 w-76' onClick={ handleHomeClick }></img>
        </figure>
      </div>
      {isLogged ? 
        <div className='hidden space-x-8 mr-4 lg:flex'>
          <div className='flex space-x-2 items-center hover:opacity-50' onClick={ () => navigate('/profile') }>
            <label className='font-bold'>CurrentUser</label>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYmlp9JDeNMaFZzw9S3G1dVztGqF_2vq9nA&usqp=CAU' className='rounded-full h-16 w-16'></img>  
          </div>
          <button className='rounded-md px-6 py-4 bg-slate-800 text-white border-2 border-white font-semibold hover:bg-slate-700' onClick={ handleLogout }>Logout</button>
        </div>
      : <div></div> }
    </nav>
    )
}

export default Navbar