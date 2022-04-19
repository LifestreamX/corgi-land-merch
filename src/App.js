import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Females from './pages/Females';
import GiftShop from './pages/GiftShop';
import Mens from './pages/Mens';
import Unisex from './pages/Unisex';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/females' element={<Females />} />
        <Route path='/males' element={<Mens />} />
        <Route path='/giftshop' element={<GiftShop />} />
        <Route path='/about' element={<About />} />
        <Route path='/unisex' element={<Unisex />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      
    </div>
  );
}

export default App;

// Learn Carousel logic
// Footer
// Routing Pages
// Tidy up website
