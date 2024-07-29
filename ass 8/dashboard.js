import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Background from "../Background";
import backgroundImage from '../assets/back.jpg';
const GetDashBoard = ({ navigation }) => {
  const username = "User";

  return ( 
  <Background source={backgroundImage}>
    <View style={styles.loggedInContainer}>
      <Text style={styles.loggedInText}>Welcome, {username}!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('products')}
      >
        <Text style={styles.buttonText}>Go to product View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('productList')}
      >
        <Text style={styles.buttonText}>Go to List View</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.buttonText}>Cart</Text>
      </TouchableOpacity>

    </View>
    </Background>
  );
}

export default GetDashBoard;
