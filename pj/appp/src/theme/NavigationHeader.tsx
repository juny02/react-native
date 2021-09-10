import React from 'react'
import { View, Text , SafeAreaView} from 'react-native'
import type {FC, ReactNode} from 'react'
import {StyleSheet} from 'react-native'
import type {StyleProp, ViewStyle, TextStyle} from 'react-native'

export type NavigationHeaderProps = {
  title?: string
  Left?: () => ReactNode
  Right?: () => ReactNode
  viewStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>
}

export const NavigationHeader: FC<NavigationHeaderProps> = ({
  title,
  Left,
  Right,
  viewStyle,
  titleStyle
}) => {
  return (
    <SafeAreaView style={[styles.view, viewStyle]}>
      <View style={[styles.flex, {paddingLeft: 10}]}>
      {Left && Left()}
      </View>
      <View style={[styles.flex]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>
      <View style={[styles.flex, {paddingRight: 10}]}>
      {Right && Right()}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {fontSize: 20, fontWeight: '500', textAlign: 'center'},
  flex: {flex: 1, backgroundColor: 'transparent'}
})
