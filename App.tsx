import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import Foundation from '@expo/vector-icons/Foundation';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// screens
import Home from './screens/Home';
import Shorts from './screens/Shorts';
import Subscriptions from './screens/Subscriptions';
import Plus from './screens/Plus';
import You from './screens/You';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const Main = () => {
return (
  <BottomTab.Navigator
  screenOptions={{
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: true
    
  }}
  >
    <BottomTab.Screen name="Home" component={Home} options={{
      tabBarIcon: ({color, size}) => (
        <Foundation name="home" size={size} color={color} />
      )
    }}/>

    <BottomTab.Screen name="Shorts" component={Shorts} options={{
      tabBarIcon: ({color, size}) => (
        <AntDesign name="youtube" size={size} color={color} />
      )
    }}/>
    <BottomTab.Screen name="Plus" component={Plus} options={{
      tabBarIcon: ({color, size}) => (
        <AntDesign name="pluscircleo" size={size} color={color} />
      ),
      tabBarShowLabel: false,
      

    }}/>
    <BottomTab.Screen name="Subscriptions" component={Subscriptions} options={{
      tabBarIcon: ({color, size}) => (
        <MaterialIcons name="subscriptions" size={size} color={color} />
      )
    }}/>
    <BottomTab.Screen name="You" component={You} options={{
      tabBarIcon: ({color, size}) => (
        <MaterialIcons name="account-circle" size={size} color={color} />
      )
    }}/>
  </BottomTab.Navigator>
)
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;