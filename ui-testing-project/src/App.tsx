import React from 'react';
import {MyButton, MyInput} from 'ui-kit'
import './App.css';

function App() {
  return (
    <div className="App">
      <MyButton color={'green'} big>Button</MyButton>
      <MyInput placeholder={'Simple input'} label={'simple label'} big />
    </div>
  );
}

export default App;
