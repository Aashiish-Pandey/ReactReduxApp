import React  from "react";
import "./App.css";
import CakeConatiner from "./Component/CakeContainer";

import {Provider} from 'react-redux'
import store from './redux/cake/store'
import HooksCakeContainer from "./Component/HookCakeContainer";
import IceCreamContainer from "./Component/IceCreamContainer";
import NewCakeContainer from "./Component/NewCakeContainer";
import ItemContainer from "./redux/cake/ItemContainer";
import UserContainer from "./Component/UserContainer";

function App() {
  return (
    <Provider store ={store}>
      <div className="App">

        <UserContainer/>
        
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <IceCreamContainer/>
        <HooksCakeContainer/>
        <CakeConatiner />
        <NewCakeContainer/> */}
      </div>
    </Provider>
  );
}

export default App;
