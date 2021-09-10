/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import Person from './src/screens/Person'
import * as D from './src/data'

const person = D.makeArray(100).map(D.createRandomPerson)
export default function App(){
  const children = people.map((person)=>(
    <Person key={person.id} person={person} />
  ))
  return(
    <SafeAreaView>
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  )
}