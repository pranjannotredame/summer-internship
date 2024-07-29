import React, { useState } from "react";
import { ImageBackground, Text, View, TextInput, TouchableOpacity, Pressable } from "react-native";
import styles from "./style";
import Background from "../Background";
import backgroundImage from '../assets/back.jpg';


const GetSignupPage = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 

 
  const onTextChanged = (text, type) => {
    if (type === "username") {
      setUsername(text);
    } else if (type === "password") {
      setPassword(text);
    }else if (type === "confirmPassword") {
      setConfirmPassword(text);
    }
  };

  
  const handleSignupPress = () => {
   
    if (confirmPassword== password) {
      console.log('signup Completed:', { username, password });
      navigation.navigate('Login');
    } else {
      alert('Password didnt match!');
    }
  };

  return (
    <Background source={backgroundImage}>
      <View style={styles.container}>
      <Text style={styles.headerText}>Signup Page</Text>
      <View style={styles.outerInputBox}>
        <TextInput
          placeholder="Enter your Username"
          value={username}
          onChangeText={(text) => onTextChanged(text, "username")}
          style={styles.input}
        />
      </View>
      <View style={styles.outerInputBox}>
        <TextInput
          placeholder="Enter your Password"
          value={password}
          onChangeText={(text) => onTextChanged(text, "password")}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <View style={styles.outerInputBox}>
        <TextInput
          placeholder="Confirm your Password"
          value={confirmPassword}
          onChangeText={(text) => onTextChanged(text, "confirmPassword")}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login'); 
    }}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
    </Background>
  );
};

export default GetSignupPage;
