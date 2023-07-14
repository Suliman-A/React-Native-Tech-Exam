
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Animated, { SlideInLeft, SlideOutLeft } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import UIExam from '../Screens/UIExam';
import NativeModuleExam from '../Screens/NativeModuleExam';

export const AppDrawer = ({ openDrawer, children, route }) => {
    const inset = useSafeAreaInsets();
    // console.log(route)
  return (
    <>
    {route === 'UIExam' || route === '' ?
    <UIExam/>
    :
    route === 'NativeModuleExam' ?
    <NativeModuleExam />
    : 
    null
    }
    {openDrawer &&
      <Animated.View
        style={[ styles.drawerContainer, {top: inset.top }]}
        entering={SlideInLeft}
        exiting={SlideOutLeft}
      >
        <View style={{ flex: 1 }}>
            {children}
        </View>
      </Animated.View>
    }
    </>
  );
};

export const DrawarItem = ({ children, closeDrawer, setRoute, name, label }) => {
    return (
    <TouchableOpacity 
        onPress={() => {
            closeDrawer()
            setRoute(name)
        }}
        style={styles.drawerItem}>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
    )
};

// export default AppDrawer

const styles = StyleSheet.create({
    drawerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '50%',
        backgroundColor: 'lightgrey',
        height: '100%',
        zIndex: 2,
    },
    drawerItem: { 
        paddingVertical: 20, 
        borderBottomWidth: 1
    },
    label: { alignSelf: 'center' },
})