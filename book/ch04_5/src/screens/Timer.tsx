import React, {useEffect, useCallback, useState} from 'react'
import { StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native'
import { Colors } from 'react-native-paper'
import * as D from '../data'

export default function Timer() {
    const [loading, setLoading]=useState(true)
    const toggleLoading = useCallback(()=>setLoading((loading)=> !loading), [])
    useEffect(()=>{
        const id = setTimeout(()=>setLoading(false), 30000)
        return ()=>clearTimeout(id)
    }, [loading])

    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>Timer</Text>
            <Text>loading: {loading.toString()}</Text>
            <Button onPress={toggleLoading}
                title={loading ? 'stop loading':'start loading'}/>
            {loading && ( <ActivityIndicator size="large" color={Colors.deepPurple700} /> )}
        </View>
    )
}

const styles = StyleSheet.create({
    view: { flex:1, alignItems: 'center', backgroundColor: Colors.yellow300 },
    text: { fontSize: 30, fontWeight: '600' }
})