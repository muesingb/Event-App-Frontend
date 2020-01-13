//renders first page of app. Has 3 options: already existing user login, create a new user
//or sign in as guest

import React, { Fragment } from 'react';
import { Text, View, Button } from 'react-native';

import NavBar from '../appView/appViewContainers/NavBar'

const LoginPage = props => {

  const handlePress = () => {
    props.navigation.navigate("CreateEvent")
  }

  return (
    <>
    <View>
      <Text>hiii from login page</Text>
    </View>
      < NavBar {...props} />
    </>
  );
};

export default LoginPage;