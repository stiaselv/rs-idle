import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { currentItemGain } from './../../../redux/actions/index';
import ProgressBar from '../../ProgressBar'

const WoodcuttingTable = () => {

  const dispatch = useDispatch();

  const [active, setActive] = useState(null);

  const [progress1, setProgress1] = useState(70);
  const [progress2, setProgress2] = useState(50);
  const [progress3, setProgress3] = useState(30);
  const [progress4, setProgress4] = useState(25);
  const [progress5, setProgress5] = useState(90);
  const [progress6, setProgress6] = useState(60);
  const [progress7, setProgress7] = useState(10);

  const [progressText1, setProgressText1] = useState("");
  const [progressText2, setProgressText2] = useState("");
  const [progressText3, setProgressText3] = useState("");
  const [progressText4, setProgressText4] = useState("");
  const [progressText5, setProgressText5] = useState("");
  const [progressText6, setProgressText6] = useState("");
  const [progressText7, setProgressText7] = useState("");

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

  const handleChange1 = (e) => {
    setProgress1(e.target.value);
    setProgressText1(e.target.value)
  };

  const handleChange2 = (e) => {
    setProgress2(e.target.value);
    setProgressText2(e.target.value)
  };

  const handleChange3 = (e) => {
    setProgress3(e.target.value);
    setProgressText3(e.target.value)
  };

  const handleChange4 = (e) => {
    setProgress4(e.target.value);
    setProgressText4(e.target.value)
  };

  const handleChange5 = (e) => {
    setProgress5(e.target.value);
    setProgressText5(e.target.value)
  };

  const handleChange6 = (e) => {
    setProgress6(e.target.value);
    setProgressText6(e.target.value)
  };

  const handleChange7 = (e) => {
    setProgress7(e.target.value);
    setProgressText7(e.target.value)
  };

  return (
    <>
    <Fragment>
    <div className='overscroll-auto overflow-auto h-96'>
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Normal_Log.png')} alt='Normal'></img>
            <div className='font-semibold text-xl'>
              Normal Tree
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Normal_Log.png')} alt='Normal'></img>
          </div>
          <div className='w-3/4 mt-4'>
            <ProgressBar progress={progress1} handleChange={handleChange1} progressText={progressText1} />
          </div>
        </div >
        <div>
          <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 1 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(1)}
          >
            { active === 1 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Oak_Log.png')} alt='Oak'></img>
            <div className='mt-2 font-semibold'>
              Oak Tree
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Oak_Log.png')} alt='Oak'></img>
          </div>
          <div className='w-3/4'>
            <ProgressBar progress={progress2} handleChange={handleChange2} progressText={progressText2} />
          </div>
        </div >
        <div>
        <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 2 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(2)}
          >
            { active === 2 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Willow_Log.png')} alt='Willow'></img>
            <div className='mt-2 font-semibold'>
              Willow Tree
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Willow_Log.png')} alt='Willow'></img>
          </div>
          <div className='w-3/4'>
            <ProgressBar progress={progress3} handleChange={handleChange3} progressText={progressText3} />
          </div>
        </div >
        <div>
        <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 3 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(3)}
          >
            { active === 3 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Maple_Log.png')} alt='Maple'></img>
            <div className='mt-2 font-semibold'>
              Maple Tree
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Maple_Log.png')} alt='Maple'></img>
          </div>
          <div className='w-3/4'>
            <ProgressBar progress={progress4} handleChange={handleChange4} progressText={progressText4} />
          </div>
        </div >
        <div>
        <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 4 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(4)}
          >
            { active === 4 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Yew_Log.png')} alt='Yew'></img>
            <div className='mt-2 font-semibold'>
              Yew Tree
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Yew_Log.png')} alt='Yew'></img>
          </div>
          <div className='w-3/4'>
          <ProgressBar progress={progress5} handleChange={handleChange5} progressText={progressText5} />
          </div>

        </div >
        <div>
        <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 5 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(5)}
          >
            { active === 5 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Magic_Log.png')} alt='Magic'></img>
            <div className='mt-2 font-semibold'>
              Magic Tree
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Magic_Log.png')} alt='Magic'></img>
          </div>
          <div className='w-3/4'>
            <ProgressBar progress={progress6} handleChange={handleChange6} progressText={progressText6} />
          </div>
        </div >
        <div>
        <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 6 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(6)}
          >
            { active === 6 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      <div className='border-y border-black flex space-x-5'>
        <div className='flex flex-col items-center'>
          <div className='flex space-x-5 mt-2 ml-3'>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Elder_Log.png')} alt='Elder'></img>
            <div className='mt-2 font-semibold'>
              Elder Tree
            </div>
            <img src={require('./../../../assets/ItemThumbnail/Woodcutting/Elder_Log.png')} alt='Elder'></img>
          </div>
          <div className='w-3/4'>
            <ProgressBar progress={progress7} handleChange={handleChange7} progressText={progressText7} />
          </div>
        </div >
        <div>
        <button
            className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 7 ? 'bg-indigo-500' : ''}`}
            onClick={ () => handleButtonClick(7)}
          >
            { active === 7 ? 'stop' : 'select' }
          </button>
        </div>
      </div >
      </div>
      </Fragment>
    </>
  )
}

export default WoodcuttingTable