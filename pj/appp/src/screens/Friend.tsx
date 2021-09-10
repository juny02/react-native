import React, { useCallback, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationHeader } from '../theme/NavigationHeader';
import CommponModal from '../modal/range'

export default function Friend() {
    const navigation = useNavigation()

    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [ranges, setRanges] = useState<number[]>([0,0])

    const [modalVisible, setModalVisible] = useState(false)
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    const open = useCallback(()=>
        {navigation.dispatch(DrawerActions.openDrawer())}, [])

    return (
        <View style={{ flex: 1 }}>
            <NavigationHeader title={'친구 찾기'} viewStyle={styles.header} titleStyle={styles.headerText} 
                Left={()=><Icon name="menu" color='white' size={30} onPress={open} />} />
            <View style={{ flexDirection: 'row', marginTop: 5 }}>

                <View style={{ flex: 3, margin: 10 }}>
                    <RNPickerSelect
                        onValueChange={(value) => setText1(value)}
                        value={text1}
                        placeholder={{
                            label: "학과",
                        }}
                        style={a}
                        fixAndroidTouchableBug={true}
                        useNativeAndroidPickerStyle={false}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                    />
                </View>
                <View style={{ flex: 2, margin: 10, marginLeft: 0 }}>
                    <RNPickerSelect
                        onValueChange={(value) => setText2(value)}
                        value={text2}
                        placeholder={{
                            label: "성별",
                        }}
                        style={b}
                        fixAndroidTouchableBug={true}
                        useNativeAndroidPickerStyle={false}
                        items={[
                            { label: '전체', value: '전체' },
                            { label: '여자', value: '여' },
                            { label: '남자', value: '남' },
                        ]}
                    />
                </View>
                <TouchableOpacity style={[styles.text]} onPress={toggleModal}>
                {ranges[0]===0 ? <Text style={{color: 'grey', fontSize: 12}}>학번</Text> : <Text style={{fontSize: 12}}>{ranges[0]}-{ranges[1]}</Text>}
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10, marginLeft: 0 }}>
                    <Icon name="magnify" size={25} color='black' onPress={() => console.log(3)} />
                </View>
            </View>
            <View style={{flex:1, alignContent: 'center', justifyContent:'center'}}>
            <CommponModal
                modalVisible={modalVisible}
                setModalVisible={toggleModal}
                ranges={setRanges}
            />
            </View>
        </View>
    );
};


const a = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        height: 35,
        color: '#000000',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10,
    },
    inputAndroid: {
        fontSize: 12,
        height: 35,
        color: '#000000',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10
    }
}
)

const b = StyleSheet.create({
    inputIOS: {
        fontSize: 12,
        height: 35,
        color: '#000000',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10,
    },
    inputAndroid: {
        fontSize: 12,
        height: 35,
        color: '#000000',
        backgroundColor: '#EAEAEA',
        borderRadius: 5,
        padding: 10,
    }
}
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#86A5E1',
        height: 80
    },
    headerText: {
        fontSize: 17,
        fontWeight: "400",
    },
    text: {
        fontSize: 12,
        borderRadius: 5,
        marginTop: 10,
        marginRight: 10,
        height: 35,
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        paddingLeft: 5,
        flex: 2
    }
})
