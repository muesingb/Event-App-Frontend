import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


import UserCard from './src/usersView/userComponents/UserCard'
import NavBar from './src/appView/appViewContainers/NavBar'

import Navigator from './routes/homeStack'

export default function App() {

  const URL = 'http://d2e3241a.ngrok.io/users'
  const [userInfo, setUserInfo] = useState([])
  
  useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
              // console.log(data)
              setUserInfo(data)
            }).catch(function(err) {
              console.log( err);
            })
        }, []);

  // const mapCards = (users) => {
  //   users.map(user =>
  //     <UserCard />
  //   )
  // }

  return (
    <>
    {/* <View style={styles.container}>
      {userInfo.map(user => <UserCard key={user.id} {...user}/>)}
      {/* {mapCards(userInfo)} */}
      {/* <TextInput />
    </View> */}
      <Navigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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