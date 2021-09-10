import React, {useRef, useCallback, useState, useMemo} from 'react'
import { StyleSheet, View, Text, Switch, TextInput, Keyboard, Platform, KeyboardAvoidingView } from 'react-native'
import {useTheme} from 'react-native-paper'
import { useToggleTheme } from '../contexts/ToggleThemeContext'
import * as D from '../data'

export default function Input() {
    const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
    const {dark, colors} = useTheme()
    const toggleTheme = useToggleTheme()

    const textInputRef = useRef<TextInput|null>(null) //ref 값 만듦
    const setFocus = useCallback(()=>
        textInputRef.current?.focus(), [textInputRef.current]) //텍스트인풋 의 focus라는 메소드를 쓰기 위해 ref로 접근함 !! current?는 null일수도 있어서고, 계속업뎃되야하므로 [ ] ㅇ

    const textInputStyle = useMemo(()=>[ //스타일값을 메모함. 한번만 적도록
        styles.textInput,
        {color: colors.text, borderColor: colors.placeholder}
    ],[colors.text, colors.placeholder])

    return (
        <View style={[styles.view, {backgroundColor: colors.surface}]}>
            <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
                <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
                <Text style={[styles.textButton]} onPress={Keyboard.dismiss /*원래있는 함수인듯*/}>dismiss keyboard</Text> 
                <View style={{flex: 1}} />
                <Switch value={dark} onValueChange={toggleTheme} />
            </View>
            <KeyboardAvoidingView style={[styles.flex]}
            behavior={Platform.OS=='ios'? 'padding' : 'height'}/*이 뷰는 이렇게 하는걸 권장함 !!*/>
                <View style={[styles.flex]} />
                <View style={[styles.textView]}>
                    <Text style={[styles.text, {color: colors.text}]}>email</Text>
                    <TextInput style={textInputStyle}
                        value={person.email} placeholder="enter your email"
                        onChangeText={(email)=>setPerson((person)=>({...person, email}))} />
                </View>
                <View style={[styles.textView]}>
                    <Text style={[styles.text, {color: colors.text}]}>name</Text>
                    <TextInput ref={textInputRef} style={textInputStyle}
                        value={person.name} placeholder="enter your name"
                        onChangeText={(name)=>setPerson((person)=>({...person, name}))} />
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    view: { flex: 1 },
    topBar: { flexDirection: 'row' , padding: 5 },
    textButton: { marginLeft: 10, fontSize: 20 },
    keyboardAvoidingView : {flex: 1, padding: 10},
    textView : {padding: 5},
    text: { fontSize: 24 },
    textInput: { fontSize: 24, borderWidth: 1, borderRadius: 5},
    flex: {flex: 1}
})