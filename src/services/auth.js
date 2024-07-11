import { atom } from 'recoil';
import { otherDataSelector } from '../state/selectors/userDataSelector';

export const isAuthenticated = () => {
  const loggedIn = useRecoilValue(otherDataSelector);
  // Example logic to determine if user is authenticated
  // Replace with your actual authentication logic, e.g., checking token in localStorage
  return loggedIn;
};
