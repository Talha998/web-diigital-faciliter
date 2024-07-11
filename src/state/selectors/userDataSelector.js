import { selector } from 'recoil';
import { userState , otherState , isAuthenticatedState } from '../atoms/userAtom';

export const userDataSelector = selector({
  key: 'userDataSelector',
  get: ({ get }) => {
    const user = get(userState);
    // Perform any transformations or computations here
    return user;
  },
});

export const otherDataSelector = selector({
    key: 'otherDataSelector',
    get: ({ get }) => {
      const otherData = get(otherState);
      // Perform any transformations or computations here
      return otherData;
    },
  });

  export const isAuthenticatedStatePart = selector({
    key: 'isAuthenticatedStatePart',
    get: ({ get }) => {
      const isAuthenticated = get(isAuthenticatedState);
      // Example logic to derive a part of authentication state if needed
      return isAuthenticated ? true : false;
    },
  });

