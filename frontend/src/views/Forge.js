import React, { useState } from 'react'
import Footer from '../components/Footer'
import SmeltingTable from '../components/itemBoxes/skillBoxes/SmeltingTable'
import SmithingTable from '../components/itemBoxes/skillBoxes/SmithingTable'

const Forge = () => {

  const [showSmithing, setShowSmithing] = useState(false)

  const handleShowSmelting = () => {
    setShowSmithing(false)
  }

  const handleShowSmithing = () => {
    setShowSmithing(true)
  }

  return (
    <>
      <div>
      <img 
          src={require("../assets/BG/ForgeBG.png")}
          className='w-screen h-5/6 -mt-6 absolute'
          alt='Forest Background'></img>
          
        <div className='grid relative justify-center mt-6 h-16 w-64 ml-96 bg-slate-500 border-black border-2 rounded shadow-2xl'>
          <div className='grid w-auto items-center'>
            <label className='flex items-center font-bold text-4xl uppercase'>
              Forest
            </label>
          </div>
          
        </div>
        <div className='w-auto h-1/6 space-x-28 mt-14 justify-center flex relative mr-96'>
          <div className='border-black border-2'>
            <div className='bg-slate-500 flex flex-col items-center'>
              <div className='rouded-md shadow-sm' role='group'>
                <div className='flex justify-center'>
                <button type='button' className={`px-4 py-4 w-1/2 text-md font-medium text-gray-900 bg-slate-300 hover:bg-slate-400 border-black border-r ${!showSmithing ? 'bg-gray-500' : 'bg-slate-300'}`} onClick={handleShowSmelting}>
                  Smelting
                </button>
                <button type='button' className={`px-4 py-4 w-1/2 text-md font-medium text-gray-900 bg-slate-300 hover:bg-slate-400 border-black ${showSmithing ? 'bg-gray-500' : 'bg-slate-300'}`} onClick={handleShowSmithing}>
                  Smithing
                </button>
                </div>
                
                <div>
                  {!showSmithing ? <SmeltingTable /> : <SmithingTable /> }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer ></Footer>

    </>
  )
}

export default Forge