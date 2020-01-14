//renders first page of app. Has 3 options: already existing user login, create a new user
//or sign in as guest

import React, { Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import UserCard from '../usersView/userComponents/UserCard'

const LoginPage = props => {

  const URL = 'http://dc06e5ce.ngrok.io/users'
  const [userInfo, setUserInfo] = useState([])
  
  useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
              setUserInfo(data)
            }).catch(function(err) {
              console.log( err);
            })
        }, []);

  const handlePress = (user_id) => {
    props.navigation.navigate("Home", {id: user_id})
  }

  return (
    <>
      <View style={styles.container}>
        {userInfo.map(user => <UserCard key={user.id} {...user} handlePress={handlePress}/>)}
        <TextInput />
      </View>
    </>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100
  }
});