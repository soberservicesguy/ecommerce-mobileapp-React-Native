import React, {Component} from 'react';
import {Provider} from "react-redux";
// IMPORT store
import {store} from "./redux_stuff/store_configuration";
// IMPORT ConnectedAppContainer
import {ConnectedAppNavigation} from "./redux_stuff/connected_components";

export default function App() {
  return (
  	<Provider store={store}>
      <ConnectedAppNavigation />
    </Provider>
  );
}