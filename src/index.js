import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/lib/integration/react';

import App from "./App";
import { store, persistor} from "./store/storeconfig";

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Main = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>    
  </Provider>
);

render(<Main />, document.getElementById("root"));
