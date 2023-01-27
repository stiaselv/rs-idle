import React from 'react'
import Footer from '../components/Footer'
import WoodcuttingTable from '../components/itemBoxes/skillBoxes/WoodcuttingTable'
import FishingTable from '../components/itemBoxes/skillBoxes/FishingTable'

const Forest = () => {

  return (
    <>
      <div>
      <img 
          src='https://cdn.discordapp.com/attachments/1063403828336132156/1063403936997982239/ForestBG.png'
          className='w-screen h-5/6 -mt-6 absolute'
          alt='Forest Background'></img>
          
        <div className='grid relative justify-center mt-6 h-16 w-64 ml-96 bg-slate-500 border-black border-2 rounded shadow-2xl'>
          <div className='grid w-auto items-center'>
            <label className='flex items-center font-bold text-4xl uppercase'>
              Forest
            </label>
          </div>
          
        </div>
        <div className='w-auto h-1/6 space-x-28 mt-14 justify-center flex relative '>
          <div className='border-black border-2 w-auto'>
            <div className='bg-slate-500 flex flex-col items-center'>
              <label className='font-bold text-xl uppercase bg-slate-700 px-32 border-b-2 border-black py-6'>Woodcutting</label>
              <WoodcuttingTable></WoodcuttingTable>
            </div>
          </div>
          <div className='mt-48'>
            <label className='font-bold uppercase'>idle</label>
          </div>
          <div className='border-black border-2'>
            <div className='bg-slate-500 flex flex-col items-center'>
              <label className='font-bold text-xl uppercase bg-slate-700 px-44 border-b-2 border-black py-6'>Fishing</label>
              <FishingTable></FishingTable>
            </div>
          </div>
        </div>
      </div>
      
      <Footer ></Footer>

    </>
  )
}

export default Forest