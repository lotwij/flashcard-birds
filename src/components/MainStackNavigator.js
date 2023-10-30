
import Home from '../screens/Home'
import Details from '../screens/ActieveSpellen'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
            <Stack.Screen name="Details" component={Details} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default MainStackNavigator;