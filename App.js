import React, { useState, useEffect, Fragment } from 'react';
import Navigator from './routes/homeStack'
import { connect } from 'react-redux'
import TabNavigator from './routes/tabNavigator.js'

const App = () => {

  return (
    <>
      <Navigator />
      {/* <TabNavigator /> */}
    </>
  );
}

export default App

// const mapStateToProps = state => {
//   return {
//     currentUser: state.eventsAndUsers.currentUser
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onUpdateUser: (user_id) => dispatch(addUser(user_id))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// fetch('http://localhost:3000/events')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//       })

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