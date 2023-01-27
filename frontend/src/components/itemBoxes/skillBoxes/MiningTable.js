import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { currentItemGain } from './../../../redux/actions/index';

import ProgressBar from '../../ProgressBar'

const MiningTable = () => {

  const dispatch = useDispatch();

  const [active, setActive] = useState(null);

  const [progress17, setProgress17] = useState(70);
  const [progress18, setProgress18] = useState(50);
  const [progress19, setProgress19] = useState(30);
  const [progress20, setProgress20] = useState(25);
  const [progress21, setProgress21] = useState(90);
  const [progress22, setProgress22] = useState(60);
  const [progress23, setProgress23] = useState(10);
  const [progress24, setProgress24] = useState(60);
  const [progress25, setProgress25] = useState(10);
  const [progress26, setProgress26] = useState(60);

  const [progressText17, setProgressText17] = useState("");
  const [progressText18, setProgressText18] = useState("");
  const [progressText19, setProgressText19] = useState("");
  const [progressText20, setProgressText20] = useState("");
  const [progressText21, setProgressText21] = useState("");
  const [progressText22, setProgressText22] = useState("");
  const [progressText23, setProgressText23] = useState("");
  const [progressText24, setProgressText24] = useState("");
  const [progressText25, setProgressText25] = useState("");
  const [progressText26, setProgressText26] = useState("");

  const handleButtonClick = (index) => {
    if (index === active){
      
      setActive(0)
      console.log(dispatch(currentItemGain(0)))
      dispatch(currentItemGain(0))

    } else {

      setActive(index)
      console.log(dispatch(currentItemGain(index)))
      dispatch(currentItemGain(index))

    }
  }

  const handleChange17 = (e) => {
    setProgress17(e.target.value);
    setProgressText17(e.target.value)
  };

  const handleChange18 = (e) => {
    setProgress18(e.target.value);
    setProgressText18(e.target.value)
  };

  const handleChange19 = (e) => {
    setProgress19(e.target.value);
    setProgressText19(e.target.value)
  };

  const handleChange20 = (e) => {
    setProgress20(e.target.value);
    setProgressText20(e.target.value)
  };

  const handleChange21 = (e) => {
    setProgress21(e.target.value);
    setProgressText21(e.target.value)
  };

  const handleChange22 = (e) => {
    setProgress22(e.target.value);
    setProgressText22(e.target.value)
  };

  const handleChange23 = (e) => {
    setProgress23(e.target.value);
    setProgressText23(e.target.value)
  };
  
  const handleChange24 = (e) => {
    setProgress24(e.target.value);
    setProgressText24(e.target.value)
  };

  const handleChange25 = (e) => {
    setProgress25(e.target.value);
    setProgressText25(e.target.value)
  };
  
  const handleChange26 = (e) => {
    setProgress26(e.target.value);
    setProgressText26(e.target.value)
  };

  return (
    <>
    <div className='overscroll-auto overflow-auto h-96'>
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Tin_Ore.png')} alt='Tin'></img>
            <div className='font-semibold'>
              Tin Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Tin_Ore.png')} alt='Tin'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress17} handleChange={handleChange17} progressText={progressText17} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 17 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(17)}
          >
            { active === 17 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Copper_Ore.png')} alt='Copper'></img>
            <div className='font-semibold'>
              Copper Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Copper_Ore.png')} alt='Copper'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress18} handleChange={handleChange18} progressText={progressText18} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 18 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(18)}
          >
            { active === 18 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Iron_Ore.png')} alt='Iron'></img>
            <div className='font-semibold'>
              Iron Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Iron_Ore.png')} alt='Iron'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress19} handleChange={handleChange19} progressText={progressText19} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 19 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(19)}
          >
            { active === 19 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Coal_Ore.png')} alt='Coal'></img>
            <div className='font-semibold'>
              Coal Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Coal_Ore.png')} alt='Coal'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress20} handleChange={handleChange20} progressText={progressText20} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 20 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(20)}
          >
            { active === 20 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Silver_Ore.png')} alt='Silver'></img>
            <div className='font-semibold'>
              Silver Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Silver_Ore.png')} alt='Silver'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress21} handleChange={handleChange21} progressText={progressText21} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 21 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(21)}
          >
            { active === 21 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Gold_Ore.png')} alt='Gold'></img>
            <div className='font-semibold'>
              Gold Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Gold_Ore.png')} alt='Gold'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress22} handleChange={handleChange22} progressText={progressText22} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 22 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(22)}
          >
            { active === 22 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Mithril_Ore.png')} alt='Mithril'></img>
            <div className='font-semibold'>
              Mithril Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Mithril_Ore.png')} alt='Mithril'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress23} handleChange={handleChange23} progressText={progressText23} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 23 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(23)}
          >
            { active === 23 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Adamant_Ore.png')} alt='Adamant'></img>
            <div className='font-semibold'>
              Adamant Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Adamant_Ore.png')} alt='Adamant'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress24} handleChange={handleChange24} progressText={progressText24} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 24 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(24)}
          >
            { active === 24 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Rune_Ore.png')} alt='Rune'></img>
            <div className='font-semibold'>
              Rune Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Rune_Ore.png')} alt='Rune'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress25} handleChange={handleChange25} progressText={progressText25} />
          </div>
        </div >

        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 25 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(25)}
          >
            { active === 25 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Dragon_Ore.png')} alt='Dragon'></img>
            <div className='font-semibold'>
              Dragon Rock
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Mining/Dragon_Ore.png')} alt='Dragon'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress26} handleChange={handleChange26} progressText={progressText26} />
          </div>

        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 26 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(26)}
          >
            { active === 26 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      </div>
    </>
  )
}

export default MiningTable