import React from 'react'

const SkillBox = () => {

  let width = 100

  const style = {
    width: width,
    transition: 2,
  }

  return (
    <div className='border-y border-black flex space-x-5'>
      <div className='flex flex-col items-center'>
        <div className='flex space-x-5 mt-2 ml-3'>
          <src className='border'>#Item</src>
          <div className='font-semibold'>
            $skillItemName
          </div>
          <src className='border'>#Item</src>
        </div>
        <div
          class="my-12"
          x-data="{ width: '50' }"
          x-init="$watch('width', value => { if (value > 100) { width = 100 } if (value == 0) { width = 10 } })"
        >
          <div class="p-10 mx-32 max-w-full bg-white shadow rounded">
            <div
              class="bg-gray-200 rounded h-6 mt-5"
              role="progressbar" 
              aria-valuenow={ width.toString }
              aria-valuemin="0"
              aria-valuemax="100"
              >
            <div
              class="bg-green-400 rounded h-6 text-center text-white text-sm transition"
              style={ style }
              x-text="`${width}%`"
              >
          </div>
        </div>
      </div>
    </div>

      </div >
  <div>
    <button className='bg-yellow-200 h-20 w-28 font-semibold uppercase border-x border-black hover:bg-yellow-300 hover:shadow-xl'>select</button>
  </div>
    </div >
  )
}

export default SkillBox