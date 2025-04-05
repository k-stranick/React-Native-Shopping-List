import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        {/* <PersistGate loading={<SplashScreen />} persistor={persistor}> */}
        <HomeScreen />;{/* </PersistGate> */}
      </Provider>
    </React.StrictMode>
  );
}

/**
 * TODO:
 * able to create and display an add to cart button OR press the card and add to cart
created the home screen and style sheet

refactored card further 
need to rework styles 
need to rework naming conventions 
add modat that allows for qty select 
need to add navbar that has items and cart and let it be selectable with state management 

overall styling 
save list?? 

be able to remove from the cart
check mark nest to list? 
display list of what is needed? 

further break apart components (i will be using this in nmy final project) 
 */
