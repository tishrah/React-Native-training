import React from 'react';
import {Text, View} from 'react-native';
import {TextView} from './TextView';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      
      }}>
      <TextView
        style={{
          flex:1,
        }}
        color="#FFFFFF"
        text="Native UI Components : TextView"
      />
    </View>
  );
};

export default App;
