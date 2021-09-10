import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Chat from "./Chat"
import Board from "./Board"
import Friend from "./Friend"
import Alarm from "./Alarm"

import type {RouteProp, ParamListBase} from '@react-navigation/native'
type TabBarIconProps = {focused: boolean; color: string; size: number}

const icons: Record<string, string> = {
  Chat: 'account-group-outline',
  Board: "bulletin-board",
  Friend: "account-search-outline",
  Alarm:"bell-outline"
}

const screenOPtions=({route}:{route: RouteProp<ParamListBase, string>}) => {
  return{
    headerShown: false,
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const{name} = route
      const focusedColor = focused? 'black' : color
      const iconName =icons[name]
      return <Icon name={iconName} color={focusedColor} size={30} />
    }
  }
}

const Tab = createBottomTabNavigator() 

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOPtions} >
      <Tab.Screen name="Chat" component={Chat} options={{tabBarShowLabel: false}} />
      <Tab.Screen name="Board" component={Board} options={{tabBarShowLabel: false}}/>
      <Tab.Screen name="Friend" component={Friend} options={{tabBarShowLabel: false}}/> 
      <Tab.Screen name="Alarm" component={Alarm} options={{tabBarShowLabel: false}}/>
    </Tab.Navigator>
  )
}