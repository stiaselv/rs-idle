import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [imageUrl, setImageUrl] = useState("/path/to/default_image.jpg");


  function handleFileChange(e) {
    const reader = new FileReader();
    reader.onload = (event) => setImageUrl(event.target.result);
    reader.readAsDataURL(e.target.files[0]);
  }


  const submit = () => {
    console.log("Submitting updated user")
    navigate('/bank')
  }

  const cancel = () => {
    console.log('Cancelling update user')
    navigate('/bank')
  }

  const handleOpenModal = () => {
    setShowModal(true);
    console.log("Show Modal")
  }

  const handleCloseModal = () => {
    setShowModal(false)
    console.log("Close Modal")
  }

  const handleConfirmPassword = () => {
    //TODO API request to save new password
    setShowModal(false)
  }

  return (
    <>
      <div className={`${showModal ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 z-50 overflow-y-auto`}>
        <div className="relative p-6 pt-80 mx-auto max-w-lg">
          <div className="flex-col bg-slate-700 rounded-lg shadow-2xl text-center items-center border-2 border-black">
            <div className='py-8'>
              <label className='font-bold text-2xl text-white'>Edit Password</label>
            </div>
            <div className="pb-10 border-t">
              <label className="block text-white font-medium mt-10 mb-2">Old Password:</label>
              <input className="border-2 border-gray-400 p-2 rounded-md w-4/5" type="password" id="oldPassword" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
              <div className='border-b mt-12'></div>
              <label className="block text-white font-medium mb-2 mt-10">New Password:</label>
              <input className="border-2 border-gray-400 p-2 rounded-md w-4/5" type="password" id="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
              <label className="block text-white font-medium mt-10 mb-2">Repeat Password:</label>
              <input className="border-2 border-gray-400 p-2 rounded-md w-4/5" type="password" id="repeatPassword" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} />
            </div>
            <div className="border-t border-gray-300">
              <div className="flex py-4 justify-center space-x-6">
                <button className='bg-green-300 text-black py-4 px-6 rounded-md font-semibold border border-white-700' onClick={handleConfirmPassword}>Confirm</button>
                <button className='bg-red-400 text-black py-2 px-4 rounded-md font-semibold border border-white-700' onClick={handleCloseModal}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center space-y-10 text-center'>
        <div className='pt-10'>
          <label className='font-bold text-6xl text-black'>Your Profile</label>
        </div>
        <div className='mt-10'>
          <img src={imageUrl} onClick={() => document.getElementById("fileInput").click()} className='max-h-96 max-w-200 hover:opacity-50' />
          <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: 'none' }} />

        </div>
        <div>
          <div className='block text-black text-xl font-medium mb-2 mt-10'>Email</div>
          <label className='font-bold text-2xl text-white border-2 px-1 border-black bg-slate-500'>test@test.com</label>
        </div>
        <div>
          <div className='block text-black text-xl font-medium mb-2 mt-10'>Username</div>
          <input className='border-2 border-gray-400 p-2 rounded-md w-80'></input>
        </div>
        <div className='space-x-5 pt-6'>
          <button onClick={() => submit()} className='bg-green-300 hover:bg-green-400 py-4 px-6 rounded-md font-semibold border border-slate-700'>Confirm</button>
          <button onClick={() => cancel()} className='bg-red-400 hover:bg-red-500 py-4 px-6 rounded-md font-semibold border border-slate-700'>Cancel</button>
        </div>
        <div>
          <button onClick={handleOpenModal} className='bg-slate-700 rounded-md py-4 px-12 font-semibold text-white hover:bg-slate-600'> Change Password</button>
        </div>
      </div>
    </>
  )
}

export default ProfilePage