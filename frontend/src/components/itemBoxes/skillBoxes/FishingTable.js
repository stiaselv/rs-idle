import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import ProgressBar from '../../ProgressBar';
import items from '../../Items';

const FishingTable = () => {

  const dispatch = useDispatch();

  const [active, setActive] = useState(null);

  const [progress8, setProgress8] = useState(70);
  const [progress9, setProgress9] = useState(50);
  const [progress10, setProgress10] = useState(30);
  const [progress11, setProgress11] = useState(25);
  const [progress12, setProgress12] = useState(90);
  const [progress13, setProgress13] = useState(60);
  const [progress14, setProgress14] = useState(10);
  const [progress15, setProgress15] = useState(60);
  const [progress16, setProgress16] = useState(10);

  const [progressText8, setProgressText8] = useState("");
  const [progressText9, setProgressText9] = useState("");
  const [progressText10, setProgressText10] = useState("");
  const [progressText11, setProgressText11] = useState("");
  const [progressText12, setProgressText12] = useState("");
  const [progressText13, setProgressText13] = useState("");
  const [progressText14, setProgressText14] = useState("");
  const [progressText15, setProgressText15] = useState("");
  const [progressText16, setProgressText16] = useState("");

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

  const handleChange8 = (e) => {
    setProgress8(e.target.value);
    setProgressText8(e.target.value);
  };

  const handleChange9 = (e) => {
    setProgress9(e.target.value);
    setProgressText9(e.target.value);
  };

  const handleChange10 = (e) => {
    setProgress10(e.target.value);
    setProgressText10(e.target.value);
  };

  const handleChange11 = (e) => {
    setProgress11(e.target.value);
    setProgressText11(e.target.value);
  };

  const handleChange12 = (e) => {
    setProgress12(e.target.value);
    setProgressText12(e.target.value);
  };

  const handleChange13 = (e) => {
    setProgress13(e.target.value);
    setProgressText13(e.target.value);
  };

  const handleChange14 = (e) => {
    setProgress14(e.target.value);
    setProgressText14(e.target.value);
  };

  const handleChange15 = (e) => {
    setProgress15(e.target.value);
    setProgressText15(e.target.value);
  };

  const handleChange16 = (e) => {
    setProgress16(e.target.value);
    setProgressText16(e.target.value);
  };

  return (
    <>
      <Fragment>

        <div className='overscroll-auto overflow-auto h-96'>
          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\ItemThumbnail\Woodcutting\Normal_Log_png' alt='Shrimp'></img>
                <div className='font-semibold'>
                  Shrimp
                </div>
                <img src='..\..\..\assets\ItemThumbnail\Woodcutting\Normal_Log_png' alt='Shrimp'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress8} handleChange={handleChange8} progressText={progressText8} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 9 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(9)}
              >
                {active === 9 ? 'stop' : 'select'}
              </button>
            </div>
          </div >
          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Oak_Log_png' alt='Herring'></img>
                <div className='font-semibold'>
                  Herring
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Oak_Log_png' alt='Herring'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress9} handleChange={handleChange9} progressText={progressText9} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 10 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(10)}
              >
                {active === 10 ? 'stop' : 'select'}
              </button>
            </div>
          </div >
          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Willow_Log_png' alt='Trout'></img>
                <div className='font-semibold'>
                  Trout
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Willow_Log_png' alt='Trout'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress10} handleChange={handleChange10} progressText={progressText10} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 11 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(11)}
              >
                {active === 11 ? 'stop' : 'select'}
              </button>
            </div>
          </div >
          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Maple_Log_png' alt='Pike'></img>
                <div className='font-semibold'>
                  Pike
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Maple_Log_png' alt='Pike'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress11} handleChange={handleChange11} progressText={progressText11} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 12 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(12)}
              >
                {active === 12 ? 'stop' : 'select'}
              </button>
            </div>
          </div >
          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Yew_Log_png' alt='Lobster'></img>
                <div className='font-semibold'>
                  Lobster
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Yew_Log_png' alt='Lobster'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress12} handleChange={handleChange12} progressText={progressText12} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 13 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(13)}
              >
                {active === 13 ? 'stop' : 'select'}
              </button>
            </div>
          </div >

          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Magic_Log_png' alt='Swordfish'></img>
                <div className='font-semibold'>
                  Swordfish
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Magic_Log_png' alt='Swordfish'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress13} handleChange={handleChange13} progressText={progressText13} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 14 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(14)}
              >
                {active === 14 ? 'stop' : 'select'}
              </button>
            </div>
          </div >

          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Elder_Log_png' alt='Shark'></img>
                <div className='font-semibold'>
                  Shark
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Elder_Log_png' alt='Shark'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress14} handleChange={handleChange14} progressText={progressText14} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 15 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(15)}
              >
                {active === 15 ? 'stop' : 'select'}
              </button>
            </div>
          </div >

          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Elder_Log_png' alt='Manta'></img>
                <div className='font-semibold'>
                  Manta Ray
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Elder_Log_png' alt='Manta'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress15} handleChange={handleChange15} progressText={progressText15} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 16 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(16)}
              >
                {active === 16 ? 'stop' : 'select'}
              </button>
            </div>
          </div >
          <div className='border-y border-black flex space-x-5'>
            <div className='flex flex-col items-center'>
              <div className='flex space-x-5 mt-2 ml-3'>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Elder_Log_png' alt='Dark'></img>
                <div className='font-semibold'>
                  Dark Crab
                </div>
                <img src='frontend\assets\Item Thumbnail\Woodcutting\Elder_Log_png' alt='Dark'></img>
              </div>
              <div className='w-3/4 mt-4'>
                <ProgressBar progress={progress16} handleChange={handleChange16} progressText={progressText16} />
              </div>
            </div >

            <div>
              <button
                className={`bg-yellow-200 h-20 w-28 font-semibold border-x-2 border-black uppercase ${active === 17 ? 'bg-indigo-500' : ''}`}
                onClick={() => handleButtonClick(17)}
              >
                {active === 17 ? 'stop' : 'select'}
              </button>
            </div>
          </div >
        </div>
      </Fragment>

    </>
  )
}

export default FishingTable