/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, Text, Image} from 'react-native';
import Img from './image';
const Data = [
  {title: 'ICON-1'},
  {title: 'ICON-2'},
  {title: 'ICON-3'},
  {title: 'ICON-4'},
  {title: 'ICON-5'},
  {title: 'ICON-6'},
  {title: 'ICON-7'},
  {title: 'ICON-8'},
  {title: 'ICON-9'},
];
const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, margin: 5, backgroundColor: 'azure', borderRadius: 50}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'aqua',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'purple',
          borderWidth: 5,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'cursive',
          }}>
          Basic UI Design
        </Text>
        <Image
          source={require('./pic.png')}
          style={{width: 100, height: 100, borderRadius: 45}}
        />
        <Text style={{fontSize: 15, fontStyle: 'italic'}}>WELCOME</Text>
      </View>

      <View
        style={{
          flex: 2,
          borderRadius: 50,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignContent: 'center',
        }}>
        {Data.map(i => (
          <Img title={i.title} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
