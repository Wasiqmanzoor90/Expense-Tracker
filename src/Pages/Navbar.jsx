import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="d-flex" style={{ borderRight: '1px solid lightgrey' }}>
      {/* Sidebar Navigation */}
      <div className="" style={{ width: '250px', height:'100vh',  backgroundColor: 'whitesmoke' }}>
        <div className="p-3">
          <div className='text-center mb-5'>
            <img width="100" height="70" src="https://img.icons8.com/ios/50/debt.png" alt="debt" />
          </div>
          <ul className="nav flex-column">
            <li className="nav-item" style={{borderBottom:'1px solid lightgray'}}>
              <Link className="nav-link text-black active" to="/Dashboard">Dashboard</Link>
            </li>
            <li className="nav-item" style={{borderBottom:'1px solid lightgray'}}>
              <Link className="nav-link text-black" to="/Seller">Sellers</Link>
            </li>

            <li className="nav-item" style={{borderBottom:'1px solid lightgray'}}>
              <Link className="nav-link text-black" to="/Admin">Orders</Link>
            </li>
            <li className="nav-item" style={{borderBottom:'1px solid lightgray'}}>
              <Link className="nav-link text-black" to="/Product">Products</Link>
            </li>

            <button className='nav-item btn btn-sm btn-primary mt-5' style={{ borderRadius: '20px' }}>
              <Link className="nav-link" to="/Register" style={{ color: 'white' }}>
                Register
              </Link>
            </button>


            <button className='nav-item btn btn-sm btn-primary mt-3' style={{ borderRadius: '20px' }}>
              <Link className="nav-link" to="/CreateExp" style={{ color: 'white' }}>
                Create List
              </Link>
            </button>


          </ul>
        </div>
      </div>


    </div>



  )
}

export default Navbar