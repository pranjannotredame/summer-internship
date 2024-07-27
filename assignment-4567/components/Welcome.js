import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

const backgroundImage = { uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Wallpapers-Cell-Phone.jpg' };

const CustomButton = ({ title, onPress, color }) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const Welcome = ({ username, onProductPage, onLogout, onCartPage }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, {username}!</Text>
        <CustomButton title="Go to Product Page" onPress={onProductPage} color="#6200EE" />
        <View style={styles.buttonSpacer} />
        <CustomButton title="Go to Cart" onPress={onCartPage} color="#6200EE" />
        <View style={styles.buttonSpacer} />
        <CustomButton title="Log Out" onPress={onLogout} color="#FF5722" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonSpacer: {
    height: 10,
  },
});

export default Welcome;
