import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const Gettingstarted = ({ onGettingStarted }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Wallpapers-Cell-Phone.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the App!</Text>
        <Button title="Get Started" onPress={onGettingStarted} color="#6200EE" />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', 
  },
});

export default Gettingstarted;
