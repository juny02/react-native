import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import Modal from "react-native-modal"

interface Props {
    modalVisible: boolean; //모달창 보이기 안보이기 여부
    setModalVisible: any; //모달창 닫기 위한 useState 세팅 함수
    ranges: any;
}

const CommponModal = (props: Props) => {
    const rangeInfm = (range : number[]) => { range }

    const [range1, setRange1] = useState<number>(12)
    const [range2, setRange2] = useState<number>(21)

    return (
            <Modal
                onBackdropPress={props.setModalVisible}
                isVisible={props.modalVisible}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                style={[styles.container]}>
                    <View style={styles.blankSpace} >
                    <MultiSlider
                        values={[12, 21]}
                        min={12}
                        max={21}
                        sliderLength={220}
                        allowOverlap={true}
                        snapped={true}
                        markerStyle={{ height: 15, width: 15, backgroundColor: '#86A5E1', borderWidth: 0 }}
                        onValuesChange={
                            (nums: number[]) => {
                                setRange1(nums[0])
                                setRange2(nums[1])
                                props.ranges(nums)
                            }
                        }
                        containerStyle={{ height: 25 }}
                        trackStyle={{ height: 3 }}
                        selectedStyle={{ backgroundColor: 'grey' }}
                        unselectedStyle={{ backgroundColor: '#E7E7E7' }}

                    />
                    <View style={{ width: 223, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text >12</Text>
                        <Text >21</Text>
                    </View>
                    <View style={{ width: 220, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <View style={[styles.a]}>
                            <Text>{range1}</Text>
                        </View>
                        <Text>학번부터</Text>
                        <View style={[styles.a]}>
                            <Text>{range2}</Text>
                        </View>
                        <Text>학번까지</Text>
                    </View>
                </View>
        </Modal >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    blankSpace: {
        width: 300,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    a: {
        width: 39,
        height: 18,
        backgroundColor: '#E7E7E7',
        margin: 5,
        alignItems: 'center',
        borderRadius: 5
    }
});

export default CommponModal;


