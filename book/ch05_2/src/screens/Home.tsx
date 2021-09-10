import React, {useState, useCallback, useRef} from "react"
import { StyleSheet, View, Text, Switch, FlatList } from "react-native"
import {useTheme} from 'react-native-paper'
import { Item } from "react-native-paper/lib/typescript/components/List/List"
import { useToggleTheme } from '../contexts/ToggleThemeContext'
import * as D from '../data'
import Person from './Person'

export default function People(){
    const[people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()])
    const theme = useTheme()
    const toggleTheme = useToggleTheme()

    const add = useCallback(()=>{
    setPeople((people)=>[...people, D.createRandomPerson()])
    }, [])
    const removeAll = useCallback(()=>{setPeople((notUsed)=>[])}, [])

    //여기부터 이번진도
    const flatListRef = useRef<FlatList | null> (null) //flatlist의 ref를 얻음
    const onContentSizeChange =useCallback( //flat에는 콘텐트사이즈바뀌면 콜백부르는 속성이잇는데 거기에 넣을 함수 정의 중
        ()=>flatListRef.current?.scrollToEnd(), //플랫 ref를 이용해 플랫의 내장 메소드인 끝까지 스크롤되는 저 함수 부름
    [flatListRef.current] //ref.current은 초깃값 null에서 유효한값으로바뀌므로 의존성몰곩에 포함되어야 함
    )

    return(
        <View style={[styles.view, {backgroundColor: theme.colors.surface}]}>
            <View style={[styles.topBar, {backgroundColor: theme.colors.accent}]}>
                <Text onPress={add} style={styles.text}>add</Text>
                <Text onPress={removeAll} style={styles.text}>removeAll</Text>
                <View style={{flex:1}}/>
                <Switch value={theme.dark} onValueChange={toggleTheme}/>
            </View>
            <FlatList
                ref={flatListRef} //불러왔떤 ref값을 속성에 설정 !
                data={people}
                renderItem={({item})=><Person person={item} /> }
                keyExtractor={(item)=>item.id}
                onContentSizeChange={onContentSizeChange}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    view: {flex:1},
    topBar: {flexDirection: 'row', padding: 5},
    text: {marginRight: 10, fontSize: 20}
})
