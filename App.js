import React from 'react';
import Navigator from './routes/homeStack'
import { connect } from 'react-redux'
import TabNavigator from './routes/tabNavigator.js'

import configureStore from './src/store/configureStore';
import { Provider } from 'react-redux';

const App = () => {

  return (
    <Provider store={configureStore} >
      <Navigator />
      {/* <TabNavigator /> */}
    </Provider>
  );
};

export default App;

// fetch('http://localhost:3000/events', {
//   method: 'POST',
//   body: JSON.stringify({name: "whadddddupppp", password: "poop"}),

//   headers: {
//     'Accept': 'application/json',
//     'content-type': 'application/json'
//   }

// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//   })