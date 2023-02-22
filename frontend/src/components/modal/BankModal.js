import React, { useState } from "react";

const BankModal = ({ item, onClose }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = event => {
    setSelectedQuantity(event.target.value);
  };

  const sellItem = () => {
    console.log(
      "Selling " +
        selectedQuantity +
        " of " +
        item.name +
        " for the total price of $" +
        item.price * item.quantity
    // TODO, Create Redux-reducer for selling item and adding coins equal to the amount of sold items.
    // TODO, Also check if quantity is more than 0
    );
  };

  return (
    <div className="fixed w-80 h-auto bg-slate-500 z-50 bg-opacity-75 max-w-full">
      <div className="m-auto bg-slate-700 p-5 rounded-lg">
        <button
          className="absolute right-4 top-4 bg-red-500 text-white border px-3 py-2 rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-lg font-medium">{item.name}</h2>
        <img src={item.image} alt={item.name} />
        <p className="my-5">{item.description}</p>
        <p className="my-5 flex justify-items-center items-center">Price: <img className="h-8 w-8 " src={require("../../assets/ItemThumbnail/Div/Coins.png")} />{item.price}</p>
        <div className="absolute right-4 bottom-4 space-x-2">
          <select value={selectedQuantity} onChange={handleQuantityChange}>
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={100}>100</option>
            <option value={1000}>1000</option>
            <option value={item.quantity}>All</option>
          </select>
          <button
            className="bg-green-500 text-white border px-3 py-2 rounded-lg"
            onClick={sellItem}
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankModal;