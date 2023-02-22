import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FooterButton } from './FooterButton'
import ItemBox from './itemBoxes/ItemBox';
import { connect } from 'react-redux'
import { useSpring, animated } from 'react-spring'
import FooterLevels from './FooterLevels';

const Footer = (props) => {

  const navigate = useNavigate();

  const [menuSize, setMenuSize] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const springProps = useSpring({
    opacity: showAlert ? 1 : 0,
    transform: showAlert ? 'translate3d(0,0,0)' : 'translate3d(0,100%,0)'
  });

  useEffect(() => {
    if (props.currentItemGain.itemID !== 0) {
      let intervalId;
      const interval = () => {
        setShowAlert(true);
        intervalId = setTimeout(() => {
          setShowAlert(false);
        }, 2500);
      }
  
      interval();
      return () => clearTimeout(intervalId);
    }
  }, [props.currentItemGain.prodTimer]);

  const handleMenuBtn = () => {
    setMenuSize(!menuSize)
    console.log(menuSize)
  }

  const handleForest = () => {
    console.log("Navigating to Forest")
    navigate('/forest')
  }

  const handleSlayerCave = () => {
    console.log("Navigating to Slayer Cave")
    navigate('/slayer')
  }

  const handleQuarry = () => {
    console.log("Navigating to Quarry")
    navigate('/quarry')
  }

  const handleCombat = () => {
    console.log("Navigating to Combat")
  }

  const handleForge = () => {
    console.log("Navigating to Forge")
    navigate('/forge')
  }

  const handleBank = () => {
    console.log("Navigating to Bank")
    navigate('/bank')
  }

  const handleSomething = () => {
    console.log("Navigating to Something")
  }


  if (!menuSize) {
    return (
      <>
      {showAlert && (
        <animated.div className='fixed flex w-96 left-96 ml-96 h-20 bg-slate-600 text-black border-black border-2 inset-96 rounded-full justify-items-center items-center'
          style={springProps}>
          <img className='w-10 h-10 ml-2' src={require("../assets/ItemThumbnail/Woodcutting/Oak_Log.png")} />
          <div className='grid justify-items-center mx-5 font-semibold'>
            <p>+1 {props.currentItemGain.name}</p>
            <p>You have gained {props.currentItemGain.prodExp} xp</p>
          </div>
          <img className='w-10 h-10' src={require("../assets/ItemThumbnail/Woodcutting/Oak_Log.png")} />


        </animated.div>
      )}
        <div className='border'>

          <footer className="absolute flex justify-between items-center space-x-5 bottom-0 text-center text-white w-full bg-gray-700 h-3/6 border-t-2 border-black">

            <div className='pl-5 w-1/3 space-x-5 grid justify-center'>
              <label className='font-bold'>AREAS</label>
              <div className='flex space-x-5 space-y-5'>
                <div className='font-semibold w-40 h-20'>
                  <div onClick={handleForest} className='hover:bg-slate-600 h-full'>
                    <img src={require('../assets/LocationThumbnail/Forest_Thumbnail.png')} alt='FOREST' className='border-2 border-black hover:ring-2' />
                  </div>
                </div>
                <div className='font-semibold border border-black w-40 h-20'>
                  <div onClick={handleSlayerCave} className='hover:bg-slate-600 h-full'>
                    <label>Slayer Cave</label>
                  </div>
                </div>
                <div className='font-semibold border border-black w-40 h-20'>
                  <div onClick={handleSomething} className='hover:bg-slate-600 h-full'>
                    <label>Altars</label>
                  </div>
                </div>
              </div>
              <div className='flex space-x-5 space-y-5'>
                <div className='font-semibold w-40 h-20'>
                  <div onClick={handleQuarry} className='hover:bg-slate-600 h-full'>
                    <img src={require('../assets/LocationThumbnail/Quarry_Thumbnail.png')} alt='QUARRY' className='border-2 border-black hover:ring-2' />
                  </div>
                </div>
                <div className='font-semibold border border-black w-40 h-20'>
                  <div onClick={handleCombat} className='hover:bg-slate-600 h-full'>
                    <label>Combat</label>
                  </div>
                </div>
                <div className='font-semibold border border-black w-40 h-20'>
                  <div onClick={handleSomething} className='hover:bg-slate-600 h-full'>
                    <label>Kitchen</label>
                  </div>
                </div>
              </div>
              <div className='flex space-x-5 space-y-5'>
                <div className='font-semibold border border-black w-40 h-20'>
                  <div onClick={handleForge} className='hover:bg-slate-600 h-full'>
                    <label>Forge</label>
                  </div>
                </div>
                <div className='font-semibold w-40 h-20'>
                  <div onClick={handleBank} className='h-full'>
                    <img src={require('../assets/LocationThumbnail/Bank_Thumbnail.png')} alt='BANK' className='border-2 border-black hover:ring-2' />
                  </div>
                </div>
                <div className='font-semibold border border-black w-40 h-20'>
                  <div onClick={handleSomething} className='hover:bg-slate-600 h-full'>
                    <label>Crafting Hut</label>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-1/3 border-x'>
              <div className="relative flex items-center mx-2">
                <div className='flex justify-items-center'>
                  <div className='-mt-64 ml-72 absolute' onClick={handleMenuBtn}>
                    <FooterButton />
                  </div>
                </div>
                <div className='items-center'>
                  <label>Hitpoints</label>
                  <div class="mt-2 bg-red-600 rounded-full">
                    <div class="w-44 bg-green-700 py-0 rounded-full">
                      <div class=" text-white text-sm inline-block bg-green-500 px-2 rounded-full">
                        $currentHitpoints
                      </div>
                    </div>
                  </div>

                  <label>Experience</label>
                  <div class="mt-2 bg-purple-600 rounded-full">
                    <div class="mt-2 w-72 bg-purple-900 py-0 rounded-full">
                      <div class=" text-white text-sm inline-block bg-purple-700 px-2 rounded-full">
                        $$currentExperience
                      </div>
                    </div>
                  </div>

                  <div className='mx-40'>
                    <label>Combat Level</label>
                    <div className='bg-gray-600 border border-black'>
                      <label>14</label>
                    </div>

                  </div>

                  <div>
                    <div>

                    </div>
                  </div>

                  <div className='mt-8 font-semibold'>
                    <div>
                      Equipment Sets
                    </div>
                  </div>

                  <div className='flex mt-6 ml-28 space-x-8'>
                    <div>
                      <div className='bg-grey-400 border border-black h-8 w-8 bg-gray-600 hover:bg-gray-500'>1</div>
                    </div>
                    <div>
                      <div className='bg-grey-400 border border-black h-8 w-8 bg-gray-600 hover:bg-gray-500'>2</div>
                    </div>
                    <div>
                      <div className='bg-grey-400 border border-black h-8 w-8 bg-gray-600 hover:bg-gray-500'>3</div>
                    </div>
                  </div>

                </div>
                <div className='flex flex-col items-center space-x-1'>
                  <div className='font-semibold underline'>
                    <label>$DisplayName</label>
                  </div>
                  <div className=''>
                    <div className='flex mx-5 mt-5 space-x-8 '>
                      <div>
                        <div className='bg-gray-700 h-12 w-12 flex items-center'>
                          <div className='bg-gray-700 rounded-full h-12 w-12'>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label>Head</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <div className='bg-gray-700 h-12 w-12 flex items-center'>
                          <div className='bg-gray-700 rounded-full h-12 w-12'>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex mx-5 mt-1 space-x-8'>
                      <div>
                        <label>Cape</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <label>Neck</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <label>Quiver</label>
                        <ItemBox></ItemBox>
                      </div>
                    </div>
                    <div className='flex mx-5 mt-1 space-x-8 '>
                      <div>
                        <label>Main</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <label>Chest</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <label>Off</label>
                        <ItemBox></ItemBox>
                      </div>
                    </div>
                    <div className='flex mx-5 mt-1 space-x-8 '>
                      <div>
                        <div className='bg-gray-700 h-12 w-12 flex items-center'>
                          <div className='bg-gray-700 rounded-full h-12 w-12'>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label>Legs</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <div className='bg-gray-700 h-12 w-12 flex items-center'>
                          <div className='bg-gray-700 rounded-full h-12 w-12'>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex mx-5 mt-1 space-x-8'>
                      <div>
                        <label>Hands</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <label>Feet</label>
                        <ItemBox></ItemBox>
                      </div>
                      <div>
                        <label>Ring</label>
                        <ItemBox></ItemBox>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">


              </div>
            </div>

            <div className='w-1/3 border-left text-center px-5 mb-2'>
              <label className='font-bold'>LEVELS</label>
              <div>
                <FooterLevels />
              </div>

            </div>
          </footer>
        </div>
      </>
    )

  } else {
    return (
      <>
      {showAlert && (
        <animated.div className='fixed flex w-96 h-20 bg-slate-600 text-black left-96 ml-96 border-black border-2 rounded-full items-center'
          style={springProps}>
          <img className='w-14 h-14 ml-7' src={props.currentItemGain.image} alt='Item'/>
          <div className='grid justify-items-center mx-5 font-semibold'>
            <p>+1 {props.currentItemGain.name}</p>
            <p>You have gained {props.currentItemGain.prodExp} xp</p>
          </div>
          <img className='w-14 h-14' src={require("../assets/ItemThumbnail/Woodcutting/Oak_Log.png")} />


        </animated.div>
      )}
      <div>
      </div>

        <div>

          <footer className="absolute flex justify-between items-center bottom-0 text-center text-white w-screen bg-gray-700 h-20">

            <div className="relative flex w-1/2">

              <div className='w-1/3 ml-44 items-center'>
                <label className='font-semibold'>Hitpoints</label>
                <div class="mt-2 bg-red-600 rounded-full">
                  <div class="w-20 mt-2 bg-green-700 py-0 rounded-full">
                    <div class=" text-white text-sm inline-block bg-green-500 px-2 rounded-full">
                      70%
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-1/3 px-10'>
                <label className='font-semibold'>Experience</label>
                <div class="mt-2 bg-purple-600 rounded-full">
                  <div class="w-40 mt-2 bg-purple-900 py-0 rounded-full">
                    <div class=" text-white text-sm inline-block bg-purple-700 px-2 rounded-full">
                      70%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-28' onClick={handleMenuBtn}>
              <FooterButton />
            </div>

            <div className="relative flex items-center w-1/2">
              <div className='w-1/3 ml-16 font-semibold underline'>
                <label className='font-semibold'>$DisplayName</label>
              </div>
              <div className='w-1/3'>
                <label className='font-semibold'>Combat Level</label>
                <div className='bg-gray-600 border ml-16 w-44'>
                  <label>14</label>
                </div>


              </div>
            </div>
          </footer>
        </div>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentItemGain: state.currentItemGain
  }
}

export default connect(mapStateToProps)(Footer);