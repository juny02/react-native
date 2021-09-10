/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet, View, Alert, Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  Colors
} from 'react-native-paper'

import TopBar from './src/screens/TopBar'
import Content from './src/screens/Content'
import BottomBar from './src/screens/BottomBar'


export default function App() {
  const iconPressed = () => Alert.alert('Icon pressed.')
  return (
    <>
    <SafeAreaView style={styles.flex}>
      <TopBar />
      <Content />
      <BottomBar />
    </SafeAreaView>
    <View style={[styles.absoluteView]}>
      <Icon name="feather" size={50} color="white" onPress={iconPressed} />
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: Colors.lightBlue100 },
  absoluteView: {
    backgroundColor: Colors.purple900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({ios: 100, android: 80}),
    padding: 10,
    borderRadius: 35
  }
})