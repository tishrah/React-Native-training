import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './screens/Home';
import SignIn from './screens/SignIn';
import AboutPage from './screens/About';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Sign In'>
            <Stack.Screen name='Sign In' component={SignIn} />
            <Stack.Screen name='About' component={AboutPage}/>
            <Stack.Screen name='Home' component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};
export default App;
