import React from 'react';
import {View, Image, Text} from 'react-native';
const Img = (prop) => {
  return (
    <View
      style={{
        width: '30%',
        marginVertical: 25,
        alignItems: 'center',
      }}>
      <Image
        source={require('./image-demo.png')}
        style={{width: 50, height: 50, borderRadius: 100}}
      />
      <Text style={{fontSize: 20}}>{prop.title}</Text>
    </View>
  );
};
export default Img;
