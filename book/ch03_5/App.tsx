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
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';

 
 import {Colors} from 'react-native-paper';
 import color from 'color';


 import Person from './src/copy/Person'
 import * as D from './src/data'

 const person1 = D.createRandomPerson()
 const person2 = D.createRandomPerson()
 const person3 = D.createRandomPerson()

 export default function App(){
   return(
     <View>
       <View style={[styles.topView]}></View>
        <ScrollView>
            <Person person={person1} />
            <Person person={person2} />
            <Person person={person3} />
        </ScrollView>
     </View>
    
   )
 }

 export const styles = StyleSheet.create({
   view:{
     flexDirection: 'column'
   },
  topView: {
    height: 60,
    backgroundColor: Colors.yellow400
  }
})
