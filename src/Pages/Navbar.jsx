  import React from 'react'
  import { Link } from 'react-router-dom';
  import { Activity } from 'lucide-react';

  function Navbar() {
    return (
      <div className="d-flex" style={{borderRight:'1px solid lightgrey'}}>
      {/* Sidebar Navigation */}
      <div className="bg-white" style={{ width: '250px' }}>
        <div className="p-3">
        
          <div className='text-center mb-5'>
            <Activity size={70}/>
          </div>
          
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-black active" to="/admin">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/Seller">Sellers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/Register">Regsiter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/Admin">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/Product">Products</Link>
            </li>
          
          </ul>
        </div>
      </div>


          </div>
      
      
    
    )
  }

  export default Navbar