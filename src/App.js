import React  from "react";
import "./App.css";
import CakeConatiner from "./Component/CakeContainer";
import {Provider} from 'react-redux'
import store from './redux/cake/store'

function App() {
  return (
    <Provider store ={store}>
      <div className="App">
      <CakeConatiner />
    </div>
    </Provider>
  );
}

export default App;
