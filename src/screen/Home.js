import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {

  const IMAGE = [
    `https://qph.cf2.quoracdn.net/main-qimg-728d85a94bc9b4f0682f20e2dda27bc0`,
    `https://tasbihdigital.com/wp-content/uploads/2022/09/Best-Aesthetic-iPhone-Wallpaper.jpg`,
    `https://i.pinimg.com/1200x/9e/86/ba/9e86baae1388f8cf7b6f2c79f9a35736.jpg`,
    `https://wallpaperaccess.com/full/2947898.jpg`,
    `https://homediy.co/wp-content/uploads/2018/11/3bc6d27da7b040ceb74aba66164aaeb0.jpg`,
    `https://memes.co.in/wallpapers/uploads/1625828544.jpg`,
    `https://iphoneswallpapers.com/wp-content/uploads/2019/10/Best-Friends-iPhone-Wallpaper.jpg`,
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161B23' }}>
      <ScrollView overScrollMode='never' style={{ padding: 15, gap: 10 }}>
        <View style={{ gap: 15, paddingBottom: 110, }}>
          {IMAGE.map((img, index) => (
            <Image
              source={{ uri: img }}
              key={index}
              style={{ width: '100%', height: 'auto', aspectRatio: 1 / 2, borderRadius: 35 }}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home