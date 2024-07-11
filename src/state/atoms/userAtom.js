import { atom } from 'recoil';

export const userState = atom({
  key: 'userState', // Unique key for the atom
  default: null,    // Initial value (null in this example)
});

export const otherState = atom({
    key: 'otherState',
    default: null,
  });