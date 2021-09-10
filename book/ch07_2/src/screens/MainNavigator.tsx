import React, {useMemo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import type {StackNavigationOptions} from '@react-navigation/stack'

import { useNavigationHorizontalInterpolator } from '../hooks'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  const interpolator = useNavigationHorizontalInterpolator()
  const leftOptions = useMemo<StackNavigationOptions>(()=>({
    gestureDirection: 'horizontal-inverted', //왼~오. inverted 안하면 오~왼
    cardStyleInterpolator: interpolator //얘는 안드로이드에 필요해서 하는거임. ios면 이거 필요업슴 useNavigationHI 훅도 구현할필요업엇는데 안드로이드때매임 ㅡㅡ
  }),[]) 
  const rightOptions = useMemo<StackNavigationOptions>(()=>({
    gestureDirection: 'horizontal',
    cardStyleInterpolator: interpolator
  }),[])
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  )
}
// Stack.Navigator에 screenOptions 설정
/*
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Colors} from 'react-native-paper'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.pink500
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  )
}
*/
// 헤더가 보이지 않도록 설정
/*
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeLeft" component={HomeLeft} />
      <Stack.Screen name="HomeRight" component={HomeRight} />
    </Stack.Navigator>
  )
}
*/
// 최종 버전
/*
import React, {useMemo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import type {StackNavigationOptions} from '@react-navigation/stack'
import {useNavigationHorizontalInterpolator} from '../hooks'
import Home from './Home'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Stack = createStackNavigator()

export default function MainNavigator() {
  const interpolator = useNavigationHorizontalInterpolator()
  const leftOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal-inverted',
      cardStyleInterpolator: interpolator
    }),
    []
  )
  const rightOptions = useMemo<StackNavigationOptions>(
    () => ({
      gestureDirection: 'horizontal',
      cardStyleInterpolator: interpolator
    }),
    []
  )
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="HomeLeft"
        component={HomeLeft}
        options={leftOptions}
      />
      <Stack.Screen
        name="HomeRight"
        component={HomeRight}
        options={rightOptions}
      />
    </Stack.Navigator>
  )
}
*/
