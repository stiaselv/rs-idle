import React from 'react'

const ModalItem = () => {
  return (
    <div className='flex items-center border-solid border-y border'>
      <div> 
        <src className='flex items-center justify-center w-20 h-20 mr-10 border-x'>Picture</src>
      </div>
      <div>
        <div>
          <label className='text-xl'>#ItemName</label>
        </div>
        <div>
          <label className='text-sm'>#itemStats</label>
        </div>
      </div>
      <div className='flex justify-end'>
        <button className='bg-green-500 hover:bg-green-400 h-20 px-4 ml-40'>Equip</button>
      </div>
    </div>
  )
}

export default ModalItem