import './App.css';
import PageInation from './Component/Page/PageInation';
import HookForm from './Component/HookForm/HookForm';
import { Toaster } from 'react-hot-toast';
import Users from './Component/Users/Users';
import Payment from './Component/Payment/Payment';
import { Helmet } from 'react-helmet-async';
import {  Routes , Route  } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';

function App() {
   return (
    <div>
      <Helmet>
        <title>App - Web Importance thing</title>
      </Helmet>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<PageInation></PageInation>} />
        <Route path='/pageination' element={<PageInation></PageInation>} />
        <Route path='/hookform' element={<HookForm></HookForm>} />
        <Route path='/users' element={<Users></Users>} />
        <Route path='/payment' element={<Payment></Payment>} />
      </Routes>
    </div>
  );
}

export default App;
