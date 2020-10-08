import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={require('./image/orange-shopping-cart-md.png')}
          resizeMode="contain"
        />
        <Text style={styles.text}>Username/Email</Text>
        <TextInput
          style={styles.input}
          placeholder={'Enter your username or email'}
          autoCompleteType={'email'}></TextInput>
          <Text style={styles.text}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder={'Enter your password'}
          autoCompleteType={'email'}></TextInput>
        <TouchableOpacity style={styles.button}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.link} >Forgot your password? </Text>
          <Text style={styles.link} > Create an account</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#80CBC4',
    flex: 1,
  },
  image: {
    width: 200,
    height: 250,
    alignSelf:"center",
    margin:45,
  },
  text:{
    color:"rgb(84, 110, 122)",
    marginLeft:22,
    marginBottom:5,
    fontWeight:"bold",
    fontSize:15
  },
  input: {
    height: 40,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 30,
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgb(84, 110, 122)',
    height: 40,
    width: 150,
    borderRadius: 10,
    margin: 8,
    alignSelf: 'center',
  },
  link:{
    color:"white",
    alignSelf:"center",
    fontSize:15,
    textDecorationLine:"underline"
  }
});

export default App;
