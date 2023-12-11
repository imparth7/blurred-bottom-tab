import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'
import { Iconify } from 'react-native-iconify'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'react-native'

const Notification = () => {

  const [MainColor, setMainColor] = useState('red')
  const [opColor, setOpColor] = useState('red')

  useEffect(() => {
    RefreshColor()
  }, [])

  const RefreshColor = () => {
    // Color
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    // Opposite color
    var r = parseInt(color.substr(1, 2), 16);
    var g = parseInt(color.substr(3, 2), 16);
    var b = parseInt(color.substr(5, 2), 16);

    var oppositeR = 255 - r;
    var oppositeG = 255 - g;
    var oppositeB = 255 - b;

    var oppositeColor = '#' + ('0' + oppositeR.toString(16)).slice(-2) +
      ('0' + oppositeG.toString(16)).slice(-2) +
      ('0' + oppositeB.toString(16)).slice(-2);

    setMainColor(color)
    setOpColor(oppositeColor)
  }

  return (
    <View style={{ flex: 1 }}>
    <StatusBar backgroundColor={'#0000'} />
      <View style={{ backgroundColor: 'hotpink', flex: 1 }}>
        {/* <View style={{ width: '100%', height: '50%', backgroundColor: MainColor }}></View>
        <View style={{ width: '100%', height: '50%', backgroundColor: opColor }}></View> */}
        <LinearGradient
          colors={[MainColor, opColor]}
          style={{ width: '100%', height: '100%', }}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        <TouchableOpacity onPress={RefreshColor} style={{ width: 50, height: 50, position: 'absolute', borderRadius: 50, right: 40, bottom: 100, backgroundColor: '#161B23', alignItems: 'center', justifyContent: 'center', }}>
          <Iconify icon='mi:shuffle' color={'lavender'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Notification