import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [data, setData] = useState([]);
  const name = localStorage.getItem('name');
  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
      
        const userId = localStorage.getItem('userId');
        if (!token || !userId) return alert("User not logged in.");

        const res = await axios.get(`https://localhost:7240/api/User/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const chartData = {
    labels: data.length
      ? data.map(i => `${i.tittle} (${new Date(i.dateTime).toLocaleDateString()})`)
      : ['No Data'],
    datasets: [{
      label: 'Amount',
      data: data.length ? data.map(i => i.amount) : [1],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1,
    }],
  };
  

  return (
    <> <h3 className='text-center'>Welcome, {name}</h3>
    <p></p>
  <div className='d-flex justify-content-center mt-5'>
      
    <div style={{ width: '300px', height: '300px' }}>
    <Doughnut data={chartData} />
  </div>
    <div className='mt-3'>
      <h5 className='text-center'>Expense Tracker</h5>
      <p className='text-center'>Total Amount: {data.reduce((acc, item) => acc + item.amount, 0)}</p>
    </div>
  </div>
  <div className="mt-3 pt-3">
  <h5>Overview</h5>
  <p>
    This dashboard provides a visual breakdown of your expenses, helping you understand where your money goes. 
    Use the donut chart to quickly identify your top spending categories and monitor your financial habits.
  </p>
  <p>
    The data is updated in real-time, allowing you to make informed decisions and stay on track with your budget. 
    You can also view recent transactions and keep an eye on your daily spending patterns.
  </p>

</div>

  </>
  )
};

export default Dashboard;
