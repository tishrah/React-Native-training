import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to About Page</Text>
      <View style={styles.buttonview}>
        <Button
          title="Sign In"
          color="red"
          onPress={() => {
            navigation.popToTop();
          }}
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
    color: 'red',
  },

  buttonview: {
    height: 50,
    width: 300,
    marginTop: 20,
  },
});

export default About;
