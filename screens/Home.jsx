import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text style={styles.text}>Welcome to Home Page</Text>
      <View style={styles.buttonview}>
        <Button
          title="About Page"
          color="blue"
          onPress={() => { navigation.navigate('About');}}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
  buttonview: {
    height: 50,
    width: 300,
    marginTop: 20,
  },
});

export default Home;
