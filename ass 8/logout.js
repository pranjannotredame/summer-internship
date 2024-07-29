import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ navigation }) => {
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error during logout', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logout_box} onPress={logout}>
        <Text style={styles.logout_text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logout_box: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  logout_text: {
    color: '#000000',
    fontSize: 22,
  },
});
