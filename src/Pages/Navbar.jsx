import React from 'react'
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';

function Navbar() {
  return (
    <div className="d-flex" style={{ borderRight: '1px solid lightgrey' }}>
      {/* Sidebar Navigation */}
      <div className="bg-white" style={{ width: '250px' }}>
        <div className="p-3">

          <div className='text-center mb-5'>
            <Activity size={70} />
          </div>

          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-black active" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/Seller">Sellers</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-black" to="/Admin">Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/Product">Products</Link>
            </li>

            <li className="nav-item btn btn-primary mt-5">
              <Link className="nav-link" to="/Register" style={{ color: 'white' }}>
               Register
              </Link>
            </li>
            
            <li className="nav-item btn btn-primary mt-4">
              <Link className="nav-link" to="/CreateExp" style={{ color: 'white' }}>
               Create List
              </Link>
            </li>


          </ul>
        </div>
      </div>


    </div>



  )
}

export default Navbar