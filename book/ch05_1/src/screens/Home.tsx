import React from 'react'
import { StyleSheet, View, Text ,Switch } from 'react-native'
import { useTheme } from 'react-native-paper' //이 커스텀 훅은 앞서 PaperProvider의 theme속성에 설정된 theme객체를 반환한다
import { useToggleTheme } from '../contexts/ToggleThemeContext'

export default function Home() {
    const {dark, colors, fonts} = useTheme()
    const toggleTheme = useToggleTheme() //테마전환하는 함수 얻음
    //const theme =useTheme() //얻은거
    /* 이친구로인해서 부모에잇는 속성을 아주쉽게 물려받을 수 있음 !!!!!
    const {fonts, colors} = theme //이 속성들 얻어낼수 ㅇ */
    return (
        <View style={[styles.view, {backgroundColor: colors.background}]}>
            <View style = {[styles.bar, {backgroundColor: colors.primary}]}>
                <Text style={[styles.text, {color:colors.text}, fonts.medium]}>
                    TopBar
                </Text>
                <View style={[{flex:1}]}/>
                <Switch value={dark 
                //아마 다크가 false일꺼임 첨에는. 근데 버튼누르면 테마전환되는함수 실행되므로 굳뜨
            } onValueChange={toggleTheme} /> 
            </View>
            <View style={styles.content}>
                <Text style={[styles.text, {color:colors.text}, fonts.regular]}>
                    Welcome to Context world!
                </Text>
            </View>
            <View style={[styles.bar, {backgroundColor: colors.accent}]}>
                <Text style={[styles.text, {color:colors.text}, fonts.light]}>
                    BottomBar
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: { flex: 1 },
    text: { fontSize: 20, textAlign: 'center'},
    bar: {height: 50, flexDirection: 'row', padding: 5, alignItems: 'center'},
    content: {flex: 1, alignItems: 'center', justifyContent:'center'}
})