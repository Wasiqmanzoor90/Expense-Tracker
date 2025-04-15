import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LottieAnimation from './Component/Lottie'; // ✅ Correct path


const Home = lazy(()=>import('./Home'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{width:200, margin:'auto'}}><LottieAnimation /></div>}>
  
      <Routes>
        <Route path='/' element={<Navbar />} />
        
        <Route path="/Home" element={<Home/>} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
