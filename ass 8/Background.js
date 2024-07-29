import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children, source }) => {
  return (
    <ImageBackground source={source} style={styles.background}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Background;
