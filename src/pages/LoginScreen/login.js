import React from 'react';
import { useSetRecoilState } from 'recoil';
import { isAuthenticatedState } from "../../state/atoms/userAtom" // Import the isAuthenticatedState

function Login() {
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedState);

  const handleLogin = () => {
    // Example login logic, set isAuthenticatedState to true upon successful login
    setIsAuthenticated(true);
    // Navigate to Dashboard or other authenticated routes
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
