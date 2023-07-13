import { StatusBar } from 'expo-status-bar';
import {  StyleSheet } from 'react-native';

import UIExam from './Screens/UIExam';
import { AppDrawer, DrawarItem } from './Components/AppDrawer';
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from './Components/AppHeader';

export default function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const [route, setRoute] =  React.useState('')

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  const closeDrawer = () => {
    setOpenDrawer(false)
  }
  const drawerData = {
    label: 'UI Exam',
    screen: <UIExam />
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
        <StatusBar style="auto" />
        <AppHeader toggleDrawer={toggleDrawer}  />
        <AppDrawer 
          route={route}
          openDrawer={openDrawer} 
          setOpenDrawer={setOpenDrawer}>
          <DrawarItem 
            label='UI Exam'
            name='UIExam' 
            setRoute={setRoute}
            closeDrawer={closeDrawer}
            />
          <DrawarItem 
            label='NativeModuleExam'
            name='NativeModuleExam' 
            setRoute={setRoute}
            closeDrawer={closeDrawer}
            />
        </AppDrawer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
