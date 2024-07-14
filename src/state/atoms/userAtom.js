import { atom } from 'recoil';

export const userState = atom({
  key: 'userState', // Unique key for the atom
  default: null,    // Initial value (null in this example)
});

export const otherState = atom({
    key: 'otherState',
    default: null,
  });


export const isAuthenticatedState = atom({
  key: 'isAuthenticatedState',
  default: false, // Initial value, user is not authenticated
});

export const isForgetOpenState = atom({
  key: 'isForgetOpenState', // Unique key for the atom
  default: true,            // Initial value
});



