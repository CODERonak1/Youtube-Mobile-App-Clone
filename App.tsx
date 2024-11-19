import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer, createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
  <BottomTab.Navigator>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Shorts" component={Shorts} />
    <BottomTab.Screen name="Plus" component={Plus} />
    <BottomTab.Screen name="Subscriptions" component={Subscriptions} />
    <BottomTab.Screen name="You" component={You} />
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