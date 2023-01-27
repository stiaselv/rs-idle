import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom'
import Navbar from './components/Navbar';

import LoginCard from './views/LoginCard';
import CreateUser from './views/CreateUser';
import Bank from './views/Bank';
import Forest from './views/Forest';
import Quarry from './views/Quarry';

function App() {

/*
  const timedAction = (timer, actionID) => {
    let item = Items.actionID
    Toast.makeToast(item.image, "You have made " + item.name, item.experience)
    console.log("Item " + item.name + " is made.")
    Thread.sleep(timer)
    return item
  }
*/

  return (
    <>
    <div className='bg-gray-400 h-screen w-screen'>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route index element={<LoginCard />} />
          <Route path='/' element={<LoginCard />} />
          <Route path='/login' element={<LoginCard />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/bank' element={<Bank />} />
          <Route path='/forest' element={<Forest />} />
          <Route path='/quarry' element={<Quarry />} />
        </Routes>
      
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
