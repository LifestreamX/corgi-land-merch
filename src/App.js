import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Females from './pages/Females';
import GiftShop from './pages/GiftShop';
import Males from './pages/Males';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/females' element={<Females />}>
          <Route path=':id' />
        </Route>
        <Route path='/males' element={<Males />}>
           <Route path=':id' />
        </Route>
        <Route path='/giftshop' element={<GiftShop />}>
          <Route path=':id' />
        </Route>

        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
