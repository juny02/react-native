import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import DrawerContent from "./DrawerContent"

const Drawer = createDrawerNavigator()

export default function MainNavigator () {
    return (
    <Drawer.Navigator drawerContent={DrawerContent}>
        <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{title: "Home"}}/>
    </Drawer.Navigator>
    )
}