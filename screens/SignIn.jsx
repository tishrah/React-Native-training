import {useState} from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text} from 'react-native';

const Login = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  let login = false;
  if (user != '' && password != '') login = true;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In Page</Text>
      <TextInput
        style={styles.inputbox}
        placeholder="USERNAME"
        onChangeText={user => setUser(user)}
      />
      <TextInput
        style={styles.inputbox}
        placeholder="PASSWORD"
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
      />
      <View style={styles.buttonview}>
        <Button
          title="SIGN IN"
          color="black"
          onPress={() => {
            if (login) {
              navigation.navigate('Home');
            } else {
              Alert.alert('Either Password or Username is empty');
            }
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
  inputbox: {
    backgroundColor: 'snow',
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    margin: 15,
    borderRadius: 5,
  },
  text:{
    fontWeight:'bold',
    fontSize:25,
    padding:20,
  }
  ,
  buttonview: {
    height: 50,
    width: 300,
    marginTop: 20,
  },
});
export default Login;
