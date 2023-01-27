import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import UserService from '../services/UserService';
import items from './../components/Items'

const LoginCard = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    email: "",
    displayName: "",
    password: "",
  })

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value})
  }

  const handleLogin = (e) => {
    dispatch({
      type: 'SET_ITEMS',
      payload: items
    })
    e.preventDefault();
    UserService.saveUser(user)
      .then((result) => {
        console.log(result);
      })
      .then(
        navigate("/bank")
      )
      .catch((err) => {
        console.log(err)
      })
  }

  const handleCreate = () => {
    navigate('/create')
  }

  return (
    <div className='flex max-w-2xl mx-auto shadow border-black justify-center items-center mt-6 bg-slate-500 border-2'>
      <div className='px-12 py-28 grid justify-items-center'>
        <div className='font-bold text-2xl tracking-wider pb-12 h-20 w-44 bg-gray-300 border-2 border-black'>
          <h1 className='mt-5 px-5'>IDLEGAINS</h1>
        </div>
        <div className='grid pt-12 font-semibold justify-items-center'>
          <label>Email</label>
          <div>
            <input 
              type={Text}
              name='email'
              value={user.email}
              onChange={(e) => handleChange(e)}
              className='h-10 w-96 border-2 border-black mt-2 px-2 py-2'></input>
          </div>
        </div>
        <div className='grid pt-12 font-semibold justify-items-center'>
          <label>Password </label>
          <div>
            <input 
              type={Text}
              name='password'
              value={user.password}
              onChange={(e) => handleChange(e)} 
              className='h-10 w-96 border-2 border-black mt-2 px-2 py-2'></input>
          </div>
        </div>
        <div className='grid justify-items-center h-14 w-full my-4 pt-4'>
          <button 
            onClick={ handleLogin }
            className='text-white font-semibold bg-gray-700 hover:bg-gray-600 hover:shadow-md py-2 px-6 border border-black'>Login</button>
        </div>
        <div className='grid justify-items-center h-14 w-full my-4 pt-4'>
          <button
            onClick={ handleCreate } 
            className='text-white font-semibold bg-gray-700 hover:bg-gray-600 hover:shadow-md py-2 px-6 border border-black'>Create Account</button>
        </div>
        <div className='grid justify-items-center font-semibold h-14 w-full my-4 pt-4'>
          <label>Have you <a href={ "https://www.google.com/" } className='text-bold text-blue-600 hover:text-blue-300'>forgotten</a> your password?</label>
        </div>
      </div>
    </div>
  )
}

export default LoginCard