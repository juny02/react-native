import React, {useState, useCallback} from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import 'react-native-gesture-handler' //그냥 하래 네비게이션 할꺼면
import { enableScreens } from 'react-native-screens' //그냥 하래 속도 빨라진다나 머라나
import { SafeAreaProvider } from 'react-native-safe-area-context' //아이폰 위에 껌정색잇어서 쓰는거. 이걸해야 버그해결됨 !!
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'

import { ToggleThemeProvider } from './src/contexts'
import MainNavigator from './src/screens/MainNavigator'

enableScreens()//얘도해야대

export default function App(){
  const scheme = useColorScheme()
  const [theme, setTheme] = useState(
    scheme === 'dark' ? DarkTheme : DefaultTheme
    )

  const toggleTheme=useCallback(()=>
    setTheme(({dark})=>(dark? DefaultTheme:DarkTheme)), [])

  return (
    <AppearanceProvider>
      <ToggleThemeProvider toggleTheme={toggleTheme}>
        <SafeAreaProvider /*provider라서 맨 뒤 */>
          <NavigationContainer /* 무조건 얘 안 */ theme={theme} >
            <MainNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ToggleThemeProvider>
    </AppearanceProvider>
  )
}