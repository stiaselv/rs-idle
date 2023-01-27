import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const changePicture = () => {
    console.log("Popping ProfileEdit Modal")
  }

  const submit = () => {
    console.log("Submitting updated user")
    navigate('/bank')
  }

  const cancel = () => {
    console.log('Cancelling update user')
    navigate('/bank')
  }

  const changePassword = () => {
    setShowModal(true);
    console.log("Show Modal")
  }

  return (
    <>
      {showModal
      
      }
      <div>
        <div onClick={() => changePicture}>
          <img src='' alt='Profile Picture' />
        </div>
        <div>
          <div>Username</div>
          <input></input>
        </div>
        <div>
          <div>Email</div>
          <input></input>
        </div>
        <div>
          <button onClick={ () => submit() } className='bg-green-300 w-20 h-10'>Confirm</button>
          <button onClick={ () => cancel() } className='bg-red-400 w-20 h-10'>Cancel</button>
        </div>
        <div>
          <button onClick={ () => changePassword() }> &#xf013; Change Password</button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage