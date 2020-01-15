//renders first page of app. Has 3 options: already existing user login, create a new user
//or sign in as guest

import React, { Fragment, useState, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import UserCard from '../usersView/userComponents/UserCard'

const LoginPage = props => {
  const test = useSelector(state => state)
  const testDispatch = useDispatch()
  console.log(test.eventsAndUsers.currentUser)
  console.log("hiii")

  const URL = 'http://29b40895.ngrok.io/users'
  const [userInfo, setUserInfo] = useState([])

  const handleTestDispatch = (user_id) => {
    testDispatch({
      type: 'ALL_USERS',
      payload: user_id
    })
  }
  
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
    handleTestDispatch(user_id)
    // props.navigation.navigate("Home", {id: user_id})
  }

  return (
    <>
      <View style={styles.container}>
        {userInfo.map(user => <UserCard key={user.id} {...user} handlePress={handlePress} />)}
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