import React, {useCallback} from 'react'
import type {FC, Dispatch, SetStateAction} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from 'react-native-paper'
import {styles} from './Person.style'
import {IconText} from '../components'
import * as D from '../data'

export type PersonIconsProps ={
    person: D.IPerson
    setPerson: Dispatch<SetStateAction<D.IPerson>>
}

const PersonIcons: FC<PersonIconsProps> = ({person, setPerson}) => {
    const commentPressed = useCallback(
        () =>
        setPerson((person)=>{
            const {comment}=person.counts
            return {...person, counts: {...person.counts, comment: comment+1}}
        }), [])
}
