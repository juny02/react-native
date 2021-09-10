
import React, { useState, useMemo, useCallback } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import Chat from './src/screens/Chat'
import Board from './src/screens/Board'
import Friend from './src/screens/Friend'
import Alarm from './src/screens/Alarm'
import MainNavigator from './src/screens/TabNavigator';

export default function App() {
  return (
    <SafeAreaProvider style={[styles.view]}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  view: { flex: 1 }
})