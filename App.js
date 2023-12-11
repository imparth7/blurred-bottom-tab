import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screen/Home';
import { Iconify } from 'react-native-iconify';
import { Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import Community from './src/screen/Community';
import Notification from './src/screen/Notification';
import Message from './src/screen/Message';

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer >
      <StatusBar style='light' backgroundColor='#000' />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarStyle: {
            elevation: 0,
            height: 60,
            width: '80%',
            marginHorizontal: '10%',
            bottom: 30,
            position: 'absolute',
            borderTopWidth: 0,
          },
          tabBarInactiveTintColor: 'red',
          tabBarBackground: () => (
            <View style={{
              // backgroundColor: '#0002',
              height: '100%',
              borderWidth: 1,
              borderColor: '#AAAA',
              borderRadius: 20,
              overflow: 'hidden',
              position: 'relative',
              // bottom: 100
            }}>
              <BlurView
                tint="default"
                style={StyleSheet.absoluteFill}
              />
            </View>
          ),
        }}
        // tabBar={props => (
        //   <View style={{
        //     elevation: 0,
        //     height: 60,
        //     width: '80%',
        //     marginHorizontal: '10%',
        //     bottom: 30,
        //     position: 'absolute',
        //     borderTopWidth: 0,
        //     zIndex: 8,
        //   }}>
        //     <BlurView
        //       tint='default'
        //       intensity={25}
        //       style={StyleSheet.absoluteFill}
        //     >
        //       <BottomTabBar {...props} style={{ backgroundColor: '#0000' }} />
        //     </BlurView>
        //   </View>
        // )}
      >
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                focused ? <Iconify icon='mingcute:home-4-fill' color={'#FFF'} size={26} />
                  : <Iconify icon='mingcute:home-4-line' color={'#DDD'} size={26} />
              )
            },
          }}
        />
        <Tab.Screen name='Community' component={Community}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                focused ? <Iconify icon='mingcute:group-fill' color={'#FFF'} size={26} />
                  : <Iconify icon='mingcute:group-line' color={'#DDD'} size={26} />
              )
            },
          }}
        />
        <Tab.Screen name='Notification' component={Notification}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                focused ? <Iconify icon='mingcute:heart-fill' color={'#FFF'} size={26} />
                  : <Iconify icon='mingcute:heart-line' color={'#DDD'} size={26} />
              )
            },
          }}
        />
        <Tab.Screen name='Message' component={Message}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                focused ? <Iconify icon='mingcute:mail-fill' color={'#FFF'} size={26} />
                  : <Iconify icon='mingcute:mail-line' color={'#DDD'} size={26} />
              )
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}