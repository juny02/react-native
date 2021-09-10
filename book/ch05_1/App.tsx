import React, {useState, useCallback} from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import MainNavigator from './src/screens/MainNavigator'
//Provider이들어간 컴포넌트는 최상위
import { AppearanceProvider, useColorScheme } from 'react-native-appearance' //A저거는 useCS라는 커스텀훅을 제공. 저 훅은 폰의 운영체제를 확인해줌
import {Provider as PaperProvider} from 'react-native-paper' //이름이너무일반적이라서 바꿔준거고, 이컴포넌트는 속성으로 dark/default모드 설정 가능
import { DefaultTheme, DarkTheme } from 'react-native-paper' //paperprovider에 theme속성에 설정할수잇는거
import { ToggleThemeProvider } from './src/contexts/ToggleThemeContext'

export default function App(){
  const scheme = useColorScheme() //현재운영체제가 어떤 모드인지
  const [theme, setTheme] = useState(
    scheme == 'dark'? DarkTheme : DefaultTheme
  )
  const toggleTheme = useCallback(
    ()=>setTheme((theme)=> (theme.dark? DefaultTheme : DarkTheme)), [])
  return(
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={[styles.safeAreaView]}>
            <MainNavigator/>
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {flex:1}
})