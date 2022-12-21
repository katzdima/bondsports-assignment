import React from 'react';
import MainContainer from 'components/MainContainer'
import { Provider } from 'react-redux'
import store from 'stateManagement/configurations/store'
import './App.css';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
