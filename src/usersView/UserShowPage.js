//will render either showpage of current user or another user using userCard
import React, { useState, useEffect, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import UserCard from './UserCard'

const UserShowPage = props => {
    const URL = `http://b43ae261.ngrok.io/users/${props.navigation.state.params.id}`
    const [userInfo, setUserInfo] = useState({})
  
    useEffect(() => {
          fetch(URL)
              .then(response => response.json())
              .then(data => {
                setUserInfo(data)
              }).catch(function(err) {
                console.log( err);
              })
          }, []);

  return (
    <View>
        <Text>Hiii from user show page</Text>
        <Text>{userInfo.user ? userInfo.user.name : null}</Text>
        {/* {userInfo.user? 
            <UserCard {...userInfo.user}/>
            : null} */}
    </View>
  );

};

export default UserShowPage;