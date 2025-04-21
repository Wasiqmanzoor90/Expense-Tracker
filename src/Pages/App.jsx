import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import { ToastContainer } from "react-toastify";
import LottieAnimation from '../Component/Lottie';
import Register from './Register';
import Login from './Login';
import PrivateRoute from '../Utils/PrivateRoute';
import Dashboard from './Dashboard';
import CreateExp from './CreateExp';


const Home = lazy(() => import('./Home'));

function App() {
  return (
    <BrowserRouter>
    <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
    />
      <div className="d-flex ">
      
        <Navbar />

        {/* Main Content */}
        <div className="flex-grow-1 p-4">
          <Suspense fallback={<div style={{ width: 200, margin: 'auto' }}><LottieAnimation /></div>}>
            <Routes>
              <Route path='Dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>} />
              <Route path='/CreateExp' element={<PrivateRoute><CreateExp/></PrivateRoute>} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Home" element={<Home />} />
              <Route path='/Login' element={<Login/>}/>
            </Routes>
          </Suspense>
        </div>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
