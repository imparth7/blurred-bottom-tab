import { View, Text, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Message = () => {

  const MESSAGES = [
    {
      "name": "Collin Wormell",
      "username": "cwormell",
      "time": "5:08 PM",
      "message": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
      "profile": "https://robohash.org/magnamsequiquia.png?size=200x200&set=set1"
    },
    {
      "name": "Nariko Benduhn",
      "username": "nbenduhn",
      "time": "11:00 AM",
      "message": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      "profile": "https://robohash.org/autquiporro.png?size=200x200&set=set1"
    },
    {
      "name": "Layla Arnholtz",
      "username": "larnholtz",
      "time": "2:26 AM",
      "message": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      "profile": "https://robohash.org/utsintaut.png?size=200x200&set=set1"
    },
    {
      "name": "Adda Redding",
      "username": "aredding",
      "time": "11:40 AM",
      "message": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "profile": "https://robohash.org/auteosquis.png?size=200x200&set=set1"
    },
    {
      "name": "Dimitri Botton",
      "username": "dbotton",
      "time": "9:24 PM",
      "message": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      "profile": "https://robohash.org/atqueinventoreut.png?size=200x200&set=set1"
    },
    {
      "name": "Giovanni Mohun",
      "username": "gmohun",
      "time": "3:08 AM",
      "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
      "profile": "https://robohash.org/sedlaboriosamquis.png?size=200x200&set=set1"
    },
    {
      "name": "Tabb Lockhart",
      "username": "tlockhart",
      "time": "9:20 PM",
      "message": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      "profile": "https://robohash.org/officiasuscipitqui.png?size=200x200&set=set1"
    },
    {
      "name": "Agnella Ivanaev",
      "username": "aivanaev",
      "time": "6:27 PM",
      "message": "Fusce consequat. Nulla nisl. Nunc nisl.",
      "profile": "https://robohash.org/nonetad.png?size=200x200&set=set1"
    },
    {
      "name": "Meagan Sangster",
      "username": "msangster",
      "time": "3:56 AM",
      "message": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "profile": "https://robohash.org/consequaturtotamodit.png?size=200x200&set=set1"
    },
    {
      "name": "Nataniel Sterrie",
      "username": "nsterrie",
      "time": "9:19 AM",
      "message": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
      "profile": "https://robohash.org/quisatullam.png?size=200x200&set=set1"
    },
    {
      "name": "Herman McGilbon",
      "username": "hmcgilbona",
      "time": "5:36 AM",
      "message": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
      "profile": "https://robohash.org/autconsequaturenim.png?size=200x200&set=set1"
    },
    {
      "name": "Trumaine Peet",
      "username": "tpeetb",
      "time": "3:20 AM",
      "message": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
      "profile": "https://robohash.org/delectusrerumdistinctio.png?size=200x200&set=set1"
    },
    {
      "name": "Art Manuely",
      "username": "amanuelyc",
      "time": "9:11 AM",
      "message": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
      "profile": "https://robohash.org/doloribusaliasid.png?size=200x200&set=set1"
    },
    {
      "name": "Kimbra Frudd",
      "username": "kfruddd",
      "time": "2:32 AM",
      "message": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      "profile": "https://robohash.org/saepequasiconsectetur.png?size=200x200&set=set1"
    },
    {
      "name": "Dav Ubee",
      "username": "dubeee",
      "time": "8:10 AM",
      "message": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      "profile": "https://robohash.org/autrerumerror.png?size=200x200&set=set1"
    },
    {
      "name": "Jilleen Purvis",
      "username": "jpurvisf",
      "time": "4:59 PM",
      "message": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
      "profile": "https://robohash.org/aututsint.png?size=200x200&set=set1"
    },
    {
      "name": "Bambie Lugard",
      "username": "blugardg",
      "time": "6:37 PM",
      "message": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      "profile": "https://robohash.org/dignissimosdolorincidunt.png?size=200x200&set=set1"
    },
    {
      "name": "Thorn Benbow",
      "username": "tbenbowh",
      "time": "8:11 AM",
      "message": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
      "profile": "https://robohash.org/omnisidipsam.png?size=200x200&set=set1"
    },
    {
      "name": "Marnia Cattanach",
      "username": "mcattanachi",
      "time": "8:20 AM",
      "message": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
      "profile": "https://robohash.org/etrerumsapiente.png?size=200x200&set=set1"
    },
    {
      "name": "Zahara Dumbarton",
      "username": "zdumbartonj",
      "time": "12:02 AM",
      "message": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "profile": "https://robohash.org/praesentiumofficiisquidem.png?size=200x200&set=set1"
    },
    {
      "name": "Calla Head",
      "username": "cheadk",
      "time": "5:01 AM",
      "message": "In congue. Etiam justo. Etiam pretium iaculis justo.",
      "profile": "https://robohash.org/sitaperiamnecessitatibus.png?size=200x200&set=set1"
    },
    {
      "name": "Dede Romao",
      "username": "dromaol",
      "time": "8:22 AM",
      "message": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      "profile": "https://robohash.org/distinctioetconsequuntur.png?size=200x200&set=set1"
    },
    {
      "name": "Saunderson Gainsburgh",
      "username": "sgainsburghm",
      "time": "12:27 AM",
      "message": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
      "profile": "https://robohash.org/dolorquisequi.png?size=200x200&set=set1"
    },
    {
      "name": "Pinchas Leith",
      "username": "pleithn",
      "time": "12:07 PM",
      "message": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      "profile": "https://robohash.org/ipsamtemporeut.png?size=200x200&set=set1"
    },
    {
      "name": "Heda Zealander",
      "username": "hzealandero",
      "time": "12:18 PM",
      "message": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      "profile": "https://robohash.org/exatqueeaque.png?size=200x200&set=set1"
    }
  ]

  return (
    <SafeAreaView style={{ backgroundColor: '#161B23', flex: 1 }}>
      <ScrollView overScrollMode="never">
        <View style={{ flex: 1, paddingVertical: 25, paddingBottom: 100, }}>
          {MESSAGES.map((message, index) => (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 15, paddingHorizontal: 10, paddingVertical: 7, }} key={index}>
              <Image source={{ uri: message.profile }} style={{ width: 75, height: 75, backgroundColor: 'steelblue', borderRadius: 75, aspectRatio: 1 / 1, borderWidth: 1.5, borderColor: 'lavender' }} />
              <View style={{ flex: 1, gap: 10 }}>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                  <Text style={{ color: '#FFF', fontWeight: '900', fontSize: 16 }}>{message.name}</Text>
                  <Text style={{ color: '#FFFA', fontWeight: '600' }}>@{message.username}</Text>
                </View>
                <View>
                  <Text style={{ color: '#FFFB', fontWeight: '300' }}
                    numberOfLines={2}
                    ellipsizeMode='tail'
                  >{message.message}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Message