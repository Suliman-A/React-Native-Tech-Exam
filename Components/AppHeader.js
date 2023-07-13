import React from "react";
import { Octicons } from '@expo/vector-icons'; 
import {  StyleSheet, View } from 'react-native';

const AppHeader = ({ toggleDrawer }) => {
  return (
      <View style={styles.header}>
          <Octicons 
            name="three-bars" 
            size={24} 
            color="white" 
            style={{ marginRight: 24 }} 
            onPress={toggleDrawer} 
            />
      </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: -1,         
  },
})
  