import React /* , { Component } */ from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {f, auth, database} from './config/config.js';

/* class  */ function App() /* extends Component */ {
  /* constructor(props) {
    super(props);
    this.registerUser('fredy.cracker@gmail.com', '12345678');
  } */
  registerUser('fredy.cracker@gmail.com', '12345678');
  function registerUser(email, password) {
    console.log(email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userObj => console.log(email, password, userObj))
      .catch(error => console.log('Something wrong happened', error));
  }
  /*   render() { */
  return (
    <View style={styles.container}>
      <Text>Hola mundo</Text>
      <Text>Hola mundo</Text>
    </View>
  );
  /*   } */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
