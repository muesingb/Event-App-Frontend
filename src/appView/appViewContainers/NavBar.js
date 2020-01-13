//renders NavBar for bottom of app
import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import NavButton from '../appViewComponents/Button'

const NavBar = props => {
    const [buttonTitles, setButtonTitles] = useState(["Profile", "Home", "Create Event", "Your Events"]);

    const renderButtons = () => {
        return buttonTitles.map(button => <NavButton name={button} navigation={props.navigation}/>)
    }

  return (
    <View style={styles.navbar}>
      {renderButtons()}
    </View>
  );

};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#fff',
        width: '100%',
        height: 90,
        flexDirection: 'row'
    }
})

export default NavBar;