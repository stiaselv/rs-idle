import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BankBox from '../components/itemBoxes/BankBox';
import Footer from '../components/Footer';
import ItemBox from '../components/itemBoxes/ItemBox';
import axios from 'axios';
import { useSelector } from 'react-redux';
import BankModal from '../components/modal/BankModal';

const Bank = () => {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);
  const [selectedBankItem, setSelectedBankItem] = useState(false);

  const inventory = useSelector(state => state.inventory.inventory)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/users/$id')
        setUser(response.data)
      } catch (err) {
        console.log(err)
      }
      setLoading(false)
    }
    fetchData();
  }, [inventory])

  return (
    <>

      <div className='grid h-screen'>
        <div className='grid items-center justify-self-center'>
          <div className='flex justify-self-center h-16 w-1/4 bg-slate-500 border-black border-2 rounded shadow-2xl'>
            <label className='grid items-center px-20 font-bold text-2xl uppercase'>Bank</label>
          </div>
          <div className='flex space-x-20 justify-center'>
            <div className='space-y-8 justify-self-center px-16 py-5 bg-slate-500 border-black border-2 rounded shadow-xl'>
              <label className='font-bold text-xl ml-14'>Equipment</label>

              <div className=''>
                <div className='flex mx-5 mt-5 space-x-8 '>
                  <div>
                    <div className='bg-slate-500 h-12 w-12 flex items-center'>
                      <div className='bg-slate-500 rounded-full h-12 w-12'>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>Head</label>
                    <ItemBox></ItemBox>
                  </div>
                  <div>
                    <div className='bg-slate-500 h-12 w-12 flex items-center'>
                      <div className='bg-slate-500 rounded-full h-12 w-12'>
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
                    <div className='bg-slate-500 h-12 w-12 flex items-center'>
                      <div className='bg-slate-500 rounded-full h-12 w-12'>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label>Legs</label>
                    <ItemBox></ItemBox>
                  </div>
                  <div>
                    <div className='bg-slate-500 h-12 w-12 flex items-center'>
                      <div className='bg-slate-500 rounded-full h-12 w-12'>
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
              <div>
                <label className='font-semibold ml-10 text-lg underline'>Equipment Sets</label>


                <div className='flex mt-4 ml-6 space-x-8'>
                  <div>
                    <div className='bg-grey-400 border border-black h-8 w-8 bg-gray-400 text-center hover:bg-gray-500'>1</div>
                  </div>
                  <div>
                    <div className='bg-grey-400 border border-black h-8 w-8 bg-gray-400 text-center hover:bg-gray-500'>2</div>
                  </div>
                  <div>
                    <div className='bg-grey-400 border border-black h-8 w-8 bg-gray-400 text-center hover:bg-gray-500'>3</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-slate-500 w-2/3 border-black border-2 rounded overflow-y-auto'>
              <li className='flex flex-col space-x-2 space-y-2'>
                <p className='ml-5 mt-2 text-xl font-semibold'>#Category</p>
                <div className='flex flex-wrap w-full space-x-3 space-y-3 px-5'>
                  {Array.isArray(inventory) && inventory.map((item, index) => (
                    <BankBox
                      key={index}
                      name={item.item.name}
                      image={item.item.image}
                      description={item.item.description}
                      price={item.item.price}
                      quantity={item.quantity}
                    />
                  ))}
                </div>
              </li>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>

  )
}

export default Bank;