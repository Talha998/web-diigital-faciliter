import React from 'react';
import { useRecoilValue } from 'recoil';
import { userDataSelector } from './state/selectors/userDataSelector';
import { otherDataSelector } from './state/selectors/userDataSelector';

import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  const userData = useRecoilValue(userDataSelector);
  const otherData = useRecoilValue(otherDataSelector);
  // import { useSetRecoilState } from 'recoil';
  // useSetRecoilState se value bachwa O ge
  // const setUser = useSetRecoilState(userState);
  // const setOther = useSetRecoilState(otherState);



  // useRecoilValue se value mang waO ge ok 
  // import { userDataSelector, otherDataSelector } from './selectors/userSelectors'; 
  // const userData = useRecoilValue(userDataSelector);
  // const otherData = useRecoilValue(otherDataSelector);

  // Check if userData exists before accessing its properties
  const userName = userData ? userData.name : 'Guest';

  return (
    <div>
        
      <AppRouter  />

    </div>
  );
}


export default App;
