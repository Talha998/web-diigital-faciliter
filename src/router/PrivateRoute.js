// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { isAuthenticated } from './utils/auth'; // Import your authentication logic
// import { isAuthenticatedStatePart } from '../state/selectors/userDataSelector'; 
// import LoginPage from '../pages/LoginScreen/login'; // Adjust with your login page component

// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const loggedIn = useRecoilValue(isAuthenticatedState);

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         loggedIn ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default PrivateRoute;
