/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen';
import {store} from './src/store/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // general
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            initialParams={{itemId: 42}}
            options={{
              title: 'My Product',
              // headerLeft: () => (
              //   <Button
              //     onPress={() => alert('This is a button!')}
              //     title="Info"
              //     color="blue"
              //   />
              // ),
              // headerTitle: (props) => <LogoTitle {...props} /> , component based
              // specific
              // headerStyle: {
              //   backgroundColor: '#f4511e',
              // },
              // headerTintColor: '#fff',
              // headerTitleStyle: {
              //   fontWeight: 'bold',
              // },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
