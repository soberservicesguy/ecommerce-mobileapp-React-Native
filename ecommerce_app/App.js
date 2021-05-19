import React, {Component} from 'react';
import {Provider} from "react-redux";
// IMPORT store
import {store} from "./redux_stuff/store_configuration";
// IMPORT ConnectedAppContainer
import {ConnectedNavigation} from "./redux_stuff/connected_components";

export default function App() {
  return (
  	<Provider store={store}>
      <ConnectedNavigation />
    </Provider>
  );
}