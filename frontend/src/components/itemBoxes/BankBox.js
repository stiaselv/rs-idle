import React, { useState } from 'react'
import BankModal from '../modal/BankModal'

const BankBox = ({ name, image, description, price, quantity }) => {
  const [showBankModal, setShowBankModal] = useState(false);
  const [shouldRenderModal, setShouldRenderModal] = useState(false);
  const selectedBankItem = {
    name: name,
    image: image,
    description: description,
    price: price,
    quantity: quantity
  };

  const handleBankBoxClick = () => {
    setShowBankModal(true);
    setShouldRenderModal(true);
  };

  const handleBankBoxClose = () => {
    setShowBankModal(false);
  };

  return (
    <>
    <div>
      {shouldRenderModal && showBankModal && (
        <BankModal item={selectedBankItem} onClose={handleBankBoxClose} />
      )}
    </div>
    
    <div onClick={handleBankBoxClick}>
      <div className='bg-orange-300 h-12 w-12 border border-black flex-col items-center justify-center hover:bg-orange-400'>
        
        <img src={image} alt={name} onClick={handleBankBoxClick} className='h-12 w-12'></img>
        <p className='-mt-6 ml-1 font-semibold'>{quantity}</p>
      </div>
    </div>
    </>
    
  );
};


export default BankBox