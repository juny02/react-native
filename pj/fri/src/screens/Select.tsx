import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import RNPickerSelect from 'react-native-picker-select';

export default function App () {
  const [text, setText] = useState("")

  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <RNPickerSelect
          onValueChange={(value) => setText(value)}
          value={text}
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
        <RNPickerSelect
          onValueChange={(value) => setText(value)}
          value={text}
          placeholder={{
            label: "성별",
          }}
          style={b}
          fixAndroidTouchableBug={true}
          useNativeAndroidPickerStyle={false}
          items={[
            { label: '여자', value: '여' },
            { label: '남자', value: '남' },
          ]}
        />
      </View >
    </SafeAreaView>
  );
};

const a = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    height: 35,
    width: 250,
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  inputAndroid: {
    fontSize: 12,
    height: 35,
    width: 250,
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10
  }
}
)

const b = StyleSheet.create({
  inputIOS: {
    fontSize: 12,
    height: 35,
    width: 100,
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10
  },
  inputAndroid: {
    fontSize: 12,
    height: 35,
    width: 100,
    color: '#000000',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10
  }
}
)
