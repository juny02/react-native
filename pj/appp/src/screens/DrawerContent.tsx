import React, {useMemo, useCallback} from "react"
import { StyleSheet } from "react-native"
import { NavigationHeader } from "../theme/NavigationHeader"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import type {FC} from 'react'
import type {DrawerContentComponentProps} from '@react-navigation/drawer'
import { DrawerContentScrollView } from "@react-navigation/drawer"
import { DrawerActions } from "@react-navigation/native"
import { View, Text } from "react-native"

const DrawerContent : FC<DrawerContentComponentProps> = (props) => {
    const {navigation} = props
    const close = useCallback(
        ()=>navigation.dispatch(DrawerActions.closeDrawer()), [])

    return(
        <DrawerContentScrollView {...props} contentContainerStyle={[styles.view]}>
            <NavigationHeader Right={()=> <Icon name="close"
                size={24} onPress={close} />} />
            <View style={[styles.content]}>
            </View>
        </DrawerContentScrollView>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    view: { flex:1, padding:5 },
    content: {flex: 1, padding: 5}
})