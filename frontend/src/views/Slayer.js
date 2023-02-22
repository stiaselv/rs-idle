import React, { useState } from 'react'
import Footer from '../components/Footer'
import BankBox from '../components/itemBoxes/BankBox'
import FishingTable from '../components/itemBoxes/skillBoxes/FishingTable'

const SlayerCave = () => {

  const [openShop, setOpenShop] = useState(false)
  const [openArea, setOpenArea] = useState(0)

  const openAreaModal = (e) => {
    setOpenArea(e)
    switch (e) {
      case 1:
        return console.log("Opening Low Area")
      case 2:
        return console.log("Opening Mid Area")
      case 3:
        return console.log("Opening High Area")
      case 4:
        return console.log("Opening Nightmare Area")

      default:
        return console.log("No Shop Area to open")


    }
  }

  const openShopModal = () => {
    setOpenShop(true)
    console.log("Opening Shop")
  }

  const handleCloseModal = () => {
    setOpenArea(false)
    setOpenShop(false)
  }

  return (
    <>
      <div>
        <img
          src={require("../assets/BG/SlayerBG.png")}
          className='w-screen h-5/6 -mt-14 absolute'
          alt='Slayer Background'></img>

        <div className='absolute mt-10 py-4 px-10 top-32 bg-slate-500 border-black border-2 rounded shadow-2xl text-4xl text-center font-bold uppercase'>
          slayer cave
        </div>
        
        <div className={`${openShop ? 'block' : 'hidden'} fixed top-52 left-40 right-0 bottom-0 z-50 overflow-y-auto`}>

          <div className='w-3/5 ml-40 bg-gray-700 border-black border-2 rounded-md flex justify-center'>
            <label className='absolute font-bold text-xl mt-4'>Slayer Shop</label>
            <div>
              <button className='absolute top-2 right-80 bg-red-400 hover:bg-red-500 text-black py-2 px-4 rounded-md font-semibold border border-white-700' onClick={handleCloseModal}>Close Shop</button>
            </div>
            <div className='flex space-x-4 mt-20 mb-5 mx-8 justify-items-center'>
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />
              <BankBox />  
            </div>
            

          </div>

        </div>
        <div className='w-auto h-1/6 mt-14 justify-center flex relative'>
          <div className='absolute border-black mt-20 border-2 left-40'>
            <div className='bg-slate-500 flex flex-col items-center pb-7'>
              <label className='font-bold text-xl uppercase bg-slate-700 px-20 border-b-2 border-black py-6'>Slayer Areas</label>
              <div className='w-3/4 py-6 bg-gray-600 border-black border-2 mt-4 font-bold text-center hover:bg-gray-500'
                onClick={() => openAreaModal(1)}>
                Low
              </div>
              <div className='w-3/4 py-6 bg-gray-600 border-black border-2 mt-4 font-bold text-center hover:bg-gray-500'
                onClick={() => openAreaModal(2)}>
                Mid
              </div>
              <div className='w-3/4 py-6 bg-gray-600 border-black border-2 mt-4 font-bold text-center hover:bg-gray-500'
                onClick={() => openAreaModal(3)}>
                High
              </div>
              <div className='w-3/4 py-6 bg-gray-600 border-black border-2 mt-4 font-bold text-center hover:bg-gray-500'
                onClick={() => openAreaModal(4)}>
                Nightmare
              </div>
            </div>
          </div>

          <div className='absolute border-black border-2 right-24'>
            <div className='bg-slate-500 mt-20 flex flex-col items-center pb-6'>
              <label className='font-bold text-xl uppercase bg-slate-700 px-28 border-b-2 border-black py-6'>Slayer Master</label>
              <div className='flex mt-4 w-4/5'>
                <div className='grid w-3/5 py-6 justify-items-center border-black border-y-2 border-l-2 bg-gray-400'>
                  <label className='mb-2 font-semibold'>Current Task:</label>
                  <label className='font-bold'>69 Goblins</label>
                </div>
                <button className='py-4 px-6 bg-gray-600 border-black border-2 hover:bg-gray-500 font-semibold'>New Task</button>
              </div>
              <div className='flex w-4/5 py-6 items-center'>
                <div className='py-10 w-3/5 bg-gray-400 border-black border-y-2 border-l-2 font-semibold text-center'>
                  Slayer Points
                </div>
                <label className='font-semibold py-10 w-2/5 bg-gray-600 border-black border-2 text-center'>$10000</label>
              </div>
              <div className='font-semibold bg-gray-600 border-black border-2 px-32 py-8 hover:bg-gray-500' onClick={openShopModal}>
                Shop
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer ></Footer>

    </>
  )
}

export default SlayerCave