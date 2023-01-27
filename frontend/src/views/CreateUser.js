import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';



const CreateUser = () => {

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

  const handleSave = (e) => {
    if (!user.email === "" && user.email.contains("@") && !user.displayName.isEmpty && !user.password.isEmpty) {
      e.preventDefault();
    UserService.saveUser(user)
      .then((result) => {
        console.log(result);

      })
      .then(
        navigate("/login")
      )
      .catch((err) => {
        console.log(err)
      })
    } else {
      console.log("Please fill out form correctly")  
    }
  }

  const handleCancel = () => {
    navigate("/login")
  }

  return (
    <div className='grid justify-items-center max-w-2xl mx-auto  shadow border-2 border-black mt-6 bg-slate-500 pb-10'>

      <div className='grid pt-12 font-semibold justify-items-center'>
        <label>Email</label>
        <div>
          <input 
            type={String}
            name='email'
            value={user.email}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 mt-2 px-2 py-2 border-2 border-black'></input>
        </div>
      </div>

      <div className='grid pt-12 font-semibold justify-items-center'>
        <label>Display Name</label>
        <div>
          <input 
            type={String}
            name='displayName'
            value={user.displayName}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 mt-2 px-2 py-2 border-2 border-black'></input>
        </div>
      </div>

      <div className='grid pt-12 font-semibold justify-items-center'>
        <label>Password</label>
        <div>
          <input 
            type={String}
            name='password'
            value={user.password}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 mt-2 px-2 py-2 border-2 border-black'></input>
        </div>
      </div>

      <div className='grid pt-12 font-semibold justify-items-center'>
        <label>Repeat Password</label>
        <div>
          <input 
            type={String}
            onChange={(e) => handleChange(e)}
            className='h-10 w-96 mt-2 px-2 py-2 border-2 border-black'></input>
        </div>
      </div>

      <div className='pt-12 space-x-4'>
        <button 
          className='rounded bg-green-500 text-white font-semibold w-20 h-10 hover:bg-green-400 hover:shadow-xl border'
          onClick={ handleSave }>
          Save
        </button>
        <button 
          className='rounded bg-red-500 text-white font-semibold w-20 h-10 hover:bg-red-400 hover:shadow-xl border'
          onClick={ handleCancel }>
          Cancel
        </button>
      </div>

      
      <div className='pt-8 pb-6 font-semibold justify-center'>
        <label 
          className='hover:text-blue-500'
          onClick={ handleCancel }
          >
            Do you already have an account?        
          </label>        
      </div>
      
    </div>
  )
}

export default CreateUser