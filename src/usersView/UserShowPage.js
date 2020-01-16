//will render either showpage of current user or another user using userCard
import React, { useState, useEffect, Fragment } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { showUserInfo } from '../store/actions/users'

import UserCard from './UserCard'

const UserShowPage = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showUserInfo(state.eventsAndUsers.showUser))
    }, []);

  return (
    <View>
        <Text>Hiii from user show page</Text>
        <Text>{state.eventsAndUsers.showUserInfo.user ? state.eventsAndUsers.showUserInfo.user.name : null}</Text>
        {/* {userInfo.user? 
            <UserCard {...userInfo.user}/>
            : null} */}
    </View>
  );

};

export default UserShowPage;