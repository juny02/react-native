import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, View, Text } from 'react-native'
import { NavigationHeader } from '../theme/NavigationHeader'

export interface IMessage {
    _id: string | number
    text: string
    createdAt: Date | number
    user: User
    image?: string
    video?: string
    audio?: string
    system?: boolean
    sent?: boolean
    received?: boolean
    pending?: boolean
  }

export interface User{
    _id: string | number
    name: string
    avatar: any
}

const title = 'Chat'
export default function Chat() {
    const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

    return (
         <View style={{ flex: 1 }}>
            <NavigationHeader title={'실시간 만남'} viewStyle={styles.header} titleStyle={styles.headerText} />   
            <View style={{margin: 20, flex: 1, borderStyle: }}>
            <GiftedChat

                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                
             /> 
             </View>           
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#86A5E1',
        height: 90
    },
    headerText: {
        fontSize: 17,
        fontWeight: "400",
    }
})