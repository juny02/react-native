import React from 'react'
import {Colors} from 'react-native-paper'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FontawesomeIcon from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Login from './Login'
import SignUp from './SignUp'
import HomeNavigator from './HomeNavigator'

import type {RouteProp, ParamListBase} from '@react-navigation/native'
type TabBarIconProps = {focused: boolean; color: string; size: number}

const icons: Record<string, string[]> = {
  HomeNavigator: ['home-circle', 'home-circle-outline'],
  Login: ['account-search', 'account-search-outline'],
  SignUp: ['account-clock', 'account-clock-outline']
}

const screenOPtions=({route}:{route: RouteProp<ParamListBase, string>}) => {
  return{
    tabBarIcon: ({focused, color, size}: TabBarIconProps) => {
      const{name} = route
      const focusedSize = focused ? size+6 : size
      const focusedColor= focused ? Colors.black : color
      const [icon, iconOutline] = icons[name] //걍 아이콘 두개를 불러온다
      const iconName = focused ? icon:iconOutline
      return <Icon name={iconName} size={focusedSize} color={focusedColor} />
    }
  }
}

const Tab = createBottomTabNavigator() 

export default function CopyMe() {
  return (
    <Tab.Navigator screenOptions={screenOPtions}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="SignUp" component={SignUp} />
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} 
        options={{tabBarLabel: "Home" , tabBarBadge: 2 }}/>  
    </Tab.Navigator>
  )
}
