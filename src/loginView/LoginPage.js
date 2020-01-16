//renders first page of app. Has 3 options: already existing user login, create a new user
//or sign in as guest
import React, { Fragment, useEffect } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import UserCard from '../usersView/UserCard'
import { currentUser, showUser, currentUserInfo, fetchUsers } from '../store/actions/users'
import { toggleRenderedEvents } from '../store/actions/events'

const LoginPage = props => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
    }, []);

  const handlePress = (user_id) => {
    dispatch(currentUser(user_id))
    dispatch(showUser(user_id))
    dispatch(currentUserInfo(user_id))
    dispatch(toggleRenderedEvents("all"))
    props.navigation.navigate("Home", {id: user_id})
  }

  return (
    <>
      <View style={styles.container}>
        {state.eventsAndUsers.allUsers.map(user => <UserCard key={user.id} {...user} handlePress={handlePress} />)}
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