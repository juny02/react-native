import React, { useState } from 'react'
import { Platform } from 'react-native'
import {View} from 'react-native'
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';


export function marker () {
    return(
        <View style={{ height:30, width: 30, borderRadius: 15, backgroundColor:'#E8E8E8', borderWidth: 0.5, borderColor: 'grey'}}/>
    )
}