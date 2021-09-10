import React , {useState, useMemo, useCallback}from 'react';
 import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
 import {Colors} from 'react-native-paper'

 import Chat from './src/screens/Chat'
 import Board from './src/screens/Board'
 import Friend from './src/screens/Friend'
 import Alarm from './src/screens/Alarm'



 export default function App(){
  const selects = useMemo(()=>['Chat', 'Board', 'Friend', 'Alarm'],[])
  const [select, setSelect]=useState<string>(selects[0])
  const onPress = useCallback((text)=>()=>setSelect(text), [])
  const buttons = useMemo(()=>
  selects.map((text)=>(
    <Text key={text} onPress={onPress(text)} style={styles.button}>{text}</Text>
  )),[])

  return(
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.topBar} />
      {select == 'Chat' && <Chat />}
      {select == 'Board' && <Board />}
      {select == 'Friend' && <Friend />}
      {select == 'Alarm' && <Alarm />}
      <View style={styles.bottomBar}>{buttons}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  topBar: { height: 79, backgroundColor: '#86A5E1'},
  button: {fontSize: 20, color: 'black'},
  bottomBar: {height: 71, backgroundColor: Colors.white, 
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}
})

