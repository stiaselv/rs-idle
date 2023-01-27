import React from 'react'
import Footer from '../components/Footer'
import SkillBox from '../components/itemBoxes/SkillBox'
import MiningTable from '../components/itemBoxes/skillBoxes/MiningTable'

const Quarry = () => {
  return (
    <>
    
      <div className='ml-96'>
      <img 
          src='https://cdn.discordapp.com/attachments/1063403828336132156/1063437337872306186/QuarryBG.png'
          className='w-screen h-5/6 -mt-6 absolute -ml-96'
          alt='Forest Background'></img>
          
        <div className='grid relative justify-center mt-6 h-16 w-64 ml-96 bg-slate-500 border-black border-2 rounded shadow-2xl'>
          <div className='grid w-auto items-center'>
            <label className='flex items-center font-bold text-2xl uppercase'>
              Quarry
            </label>
          </div>
          
        </div>
        <div className='w-auto h-auto space-x-28 mt-14 justify-center flex relative '>
          <div className='mt-48'>
            <label className='font-bold uppercase'>idle</label>
          </div>
          <div className='border-black border-2 h-1/2'>
            <div className='bg-slate-500 flex flex-col items-center'>
              <label className='underline font-bold uppercase my-5'>Mining</label>
              <MiningTable></MiningTable>
            </div>
          </div>
        </div>
      </div>
      
      <Footer ></Footer>

    </>
  )
}

export default Quarry