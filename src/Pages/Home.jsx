
import React, { useEffect, useState } from 'react'
import LottieAnimation from '../Component/Lottie';
const user1 = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Rose', email: 'charlie@example.com' },
  ];
function Home() {
    const[users, Stduser]=useState([]);
    const[Loading, SetLoading]=useState(true);
useEffect(()=>{

    const timer = setTimeout(()=>{
        Stduser(user1);
        SetLoading(false);
    },2000);
    return () => clearTimeout(timer); // cleanup
},[]);
if (Loading) return (
  <div style={{ width: 200, margin: 'auto' }}>
  <LottieAnimation/>
  </div>
);
  return (
    <div>
    <h2>User List</h2>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Home