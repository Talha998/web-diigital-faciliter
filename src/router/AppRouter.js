import React from 'react';
import { BrowserRouter as Router, Routes, Route , Redirect } from 'react-router-dom';
import Login from '../pages/LoginScreen/login'; // Adjust path as per your project structure
import PrivateRoute from './PrivateRoute'; // Import your PrivateRoute component
import Dashboard from '../specific/Dashboard/Dashboard';
import { isAuthenticatedStatePart } from '../state/selectors/userDataSelector';
import { useRecoilValue } from 'recoil';

function AppRouter() {
    const loggedIn = useRecoilValue(isAuthenticatedStatePart);
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        
        {/* Private routes */}
        {loggedIn == true && <Route path="/dashboard" element={<Dashboard />} /> }
        

        {/* Handle 404 - Route not found */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
