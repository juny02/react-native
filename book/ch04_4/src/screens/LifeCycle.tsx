import React, {useEffect, useLayoutEffect} from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import { Colors } from 'react-native-paper'
import type {LayoutChangeEvent} from 'react-native'

export default function LifeCycle() {
   
    return (
        <View style={[styles.view]}>
            <Text style={[styles.text]}>LifeCycle</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: { padding: 5, backgroundColor: Colors.blue900 },
    text: { fontSize: 20, color: 'white' }
})