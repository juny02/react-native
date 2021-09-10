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
  Platform,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import color from 'color'
import { Colors } from 'react-native-paper'

const { width, height } = Dimensions.get('window')


export default function App() {
  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
      <Text style={[styles.text]}>height: {height}</Text>

      <View style={[styles.box, styles.border]} />
      <View style={[styles.box, styles.border, { borderRadius: 20 }]} />
      <View style={[styles.box, styles.border, { borderTopLeftRadius: 40, borderBottomLeftRadius: 40 }]} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.blue500,
    flex: 1, paddingLeft: Platform.select({ ios: 0, android: 20 })
  },
  text: { marginBottom: 10, marginLeft: 50, marginTop: 20, fontSize: 20, color: color(Colors.blue500).lighten(0.9).toString() },
  box: {
    height: 100, backgroundColor: Colors.lime500, marginBottom: 10,
    marginLeft: Platform.select({ ios: 20, android: 0 })
  },
  border: { borderWidth: 10, borderColor: color('black').alpha(0.3).string() }
})
