import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
import styles from "./style"; 
import Background from "../Background";
import backgroundImage from '../assets/back.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GetLoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('123');
  const [passkey, setPasskey] = useState('123');

  const storeCredentials = async (username, passkey) => {
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('passkey', passkey);
      console.log(username,passkey,'Credentials stored successfully');
    } catch (error) {
      console.error('Error storing credentials', error);
      Alert.alert('Storage Error', 'Failed to store credentials');
    }
  };

  const onTextChanged = (text, type) => {
    if (type === "username") {
      setUsername(text);
    } else if (type === "passkey") {
      setPasskey(text);
    }
  };

  const handleLoginPress = () => {
    if (username && passkey) {
      console.log('Logging in with:', { username, passkey });
      storeCredentials(username, passkey);
      navigation.navigate('dashBoard');
    } else {
      Alert.alert('Input Error', 'Please enter both username and password');
    }
  };

  return (
    <Background source={backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Login Page</Text>
        <View style={styles.outerInputBox}>
          <TextInput
            placeholder="Enter your Username"
            value={username}
            onChangeText={(text) => onTextChanged(text, 'username')}
            style={styles.input}
          />
        </View>
        <View style={styles.outerInputBox}>
          <TextInput
            placeholder="Enter your Password"
            value={passkey}
            onChangeText={(text) => onTextChanged(text, 'passkey')}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleLoginPress}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.buttonText}>Go to Signup</Text>
          </TouchableOpacity>
          <Pressable onPress={() => Alert.alert('Forgot Password', 'Contact admin')}>
            <Text style={{ color: "black", textAlign: "center" }}>
              Forgot password?
            </Text>
          </Pressable>
        </View>
      </View>
    </Background>
  );
};

export default GetLoginPage;
