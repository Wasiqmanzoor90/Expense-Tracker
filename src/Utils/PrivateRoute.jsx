import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const PrivateRoute = ({ children }) => {
  const [isVerified, setIsVerified] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsVerified(false);
        return;
      }

      try {
        const res = await axios.get('https://localhost:7240/api/User/verify', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setIsVerified(res.status === 200);
      } catch {
        setIsVerified(false);
      }
    };

    verifyToken();
  }, []);

  if (isVerified === false) return <Navigate to="/Login" />;
  if (isVerified === true) return children;

  return null; // Return nothing while verifying (instant)
};

export default PrivateRoute;
