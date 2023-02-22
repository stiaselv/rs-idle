import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import items from '../../Items';

import ProgressBar from '../../ProgressBar'

const SmithingTable = () => {

  const dispatch = useDispatch();

  const [active, setActive] = useState(null);

  const [progress27, setProgress27] = useState(70);
  const [progress28, setProgress28] = useState(50);
  const [progress29, setProgress29] = useState(30);
  const [progress30, setProgress30] = useState(25);
  const [progress31, setProgress31] = useState(90);
  const [progress32, setProgress32] = useState(60);
  const [progress33, setProgress33] = useState(10);
  const [progress34, setProgress34] = useState(60);
  const [progress35, setProgress35] = useState(10);

  const [progressText27, setProgressText27] = useState("");
  const [progressText28, setProgressText28] = useState("");
  const [progressText29, setProgressText29] = useState("");
  const [progressText30, setProgressText30] = useState("");
  const [progressText31, setProgressText31] = useState("");
  const [progressText32, setProgressText32] = useState("");
  const [progressText33, setProgressText33] = useState("");
  const [progressText34, setProgressText34] = useState("");
  const [progressText35, setProgressText35] = useState("");

  const handleButtonClick = (index) => {
    if (index === active) {

      setActive(0)
      dispatch(null)

    } else {
      console.log(items)
      setActive(index)
      let item = {}
      items.forEach(i => {
        if (i.itemID === index) {
          item = i
          console.log(i)
        }
      })
      dispatch({
        type: "NEW_PRODUCTION_TYPE",
        itemID: item.itemID,
        name: item.name,
        image: item.image,
        price: item.price,
        haPrice: item.haPrice,
        description: item.description,
        class: item.class,
        prodTimer: item.prodTimer,
        prodExp: item.prodExp,
        skill: item.skill,
      })
    }
  }

  const handleChange27 = (e) => {
    setProgress27(e.target.value);
    setProgressText27(e.target.value)
  };

  const handleChange28 = (e) => {
    setProgress28(e.target.value);
    setProgressText28(e.target.value)
  };

  const handleChange29 = (e) => {
    setProgress29(e.target.value);
    setProgressText29(e.target.value)
  };

  const handleChange30 = (e) => {
    setProgress30(e.target.value);
    setProgressText30(e.target.value)
  };

  const handleChange31 = (e) => {
    setProgress31(e.target.value);
    setProgressText31(e.target.value)
  };

  const handleChange32 = (e) => {
    setProgress32(e.target.value);
    setProgressText32(e.target.value)
  };

  const handleChange33 = (e) => {
    setProgress33(e.target.value);
    setProgressText33(e.target.value)
  };
  
  const handleChange34 = (e) => {
    setProgress34(e.target.value);
    setProgressText34(e.target.value)
  };

  const handleChange35 = (e) => {
    setProgress35(e.target.value);
    setProgressText35(e.target.value)
  };

  return (
    <>
    <div className='overscroll-auto overflow-auto h-96'>
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Copper_Ore.png')} alt='Copper'></img>
            <div className='font-semibold'>
              Bronze Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Copper_Ore.png')} alt='Copper'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress27} handleChange={handleChange27} progressText={progressText27} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 27 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(27)}
          >
            { active === 27 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Iron_Ore.png')} alt='Iron'></img>
            <div className='font-semibold'>
              Iron Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Iron_Ore.png')} alt='Iron'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress28} handleChange={handleChange28} progressText={progressText28} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 28 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(28)}
          >
            { active === 28 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Coal_Ore.png')} alt='Coal'></img>
            <div className='font-semibold'>
              Steel Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Coal_Ore.png')} alt='Coal'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress29} handleChange={handleChange29} progressText={progressText29} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 29 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(29)}
          >
            { active === 29 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Silver_Ore.png')} alt='Silver'></img>
            <div className='font-semibold'>
              Silver Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Silver_Ore.png')} alt='Silver'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress30} handleChange={handleChange30} progressText={progressText30} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 30 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(30)}
          >
            { active === 30 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Gold_Ore.png')} alt='Gold'></img>
            <div className='font-semibold'>
              Gold Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Gold_Ore.png')} alt='Gold'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress31} handleChange={handleChange31} progressText={progressText31} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 31 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(31)}
          >
            { active === 31 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Mithril_Ore.png')} alt='Mithril'></img>
            <div className='font-semibold'>
              Mithril Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Mithril_Ore.png')} alt='Mithril'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress32} handleChange={handleChange32} progressText={progressText32} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 32 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(32)}
          >
            { active === 32 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Adamant_Ore.png')} alt='Adamant'></img>
            <div className='font-semibold'>
              Adamant Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Adamant_Ore.png')} alt='Adamant'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress33} handleChange={handleChange33} progressText={progressText33} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 33 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(33)}
          >
            { active === 33 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Rune_Ore.png')} alt='Rune'></img>
            <div className='font-semibold'>
              Rune Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Rune_Ore.png')} alt='Rune'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress34} handleChange={handleChange34} progressText={progressText34} />
          </div>
        </div >

        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 34 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(34)}
          >
            { active === 34 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Dragon_Ore.png')} alt='Dragon'></img>
            <div className='font-semibold'>
              Dragon Bar
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Dragon_Ore.png')} alt='Dragon'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress35} handleChange={handleChange35} progressText={progressText35} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 35 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(35)}
          >
            { active === 35 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      </div>
    </>
  )
}

export default SmithingTable