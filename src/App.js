import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import './App.css';
import PicsContainer from './containers/PicsContainer'
import CountPics from './components/CountPics'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PicsContainer />
      <CountPics total="5" />
    </div>
    </Provider>
  );
}

export default App;
