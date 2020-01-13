import React, { useState, useEffect, Fragment } from 'react';
import Navigator from './routes/homeStack'

export default function App() {

  return (
    <>
      <Navigator />
    </>
  );
}

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