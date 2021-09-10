import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from 'react-native-paper'
import { NavigationHeader } from '../theme/NavigationHeader'

const title = 'Alarm'
export default function Alarm() {
    return (
        <View style={{ flex: 1 }}>
            <NavigationHeader title={'알람'} viewStyle={styles.header} titleStyle={styles.headerText} />
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#86A5E1',
        height: 80
    },
    headerText: {
        fontSize: 17,
        fontWeight: "400",
    }
})