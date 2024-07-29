import React, { useState } from "react";
import styles from "./style";
import {
      Text,
      View,
      Switch,
      TouchableOpacity,
} from "react-native";
import Background from "../Background";
import Icon from 'react-native-vector-icons/Ionicons';
import backgroundImage from '../assets/back.jpg';

const GetStartPage = ({ navigation }) => {
      const [theme, setTheme] = useState(false);
      const [isEnabled, setIsEnabled] = useState(false);

      const toggleSwitch = () => {
            setIsEnabled((previousState) => !previousState);
            setTheme((previousTheme) => !previousTheme);
      };

      return (
            <Background source={backgroundImage}>
                  <View style={styles.container}>
                        <View style={!theme ? styles.outerBox : styles.douterBox}>
                              <View style={styles.getStartedContainer}>
                                    <Text style={!theme ? styles.getStartedText : styles.dgetStartedText}>Welcome to Your App!</Text>
                                    <Text style={!theme ? styles.getStartedText : styles.dgetStartedText}>
                                          Get started by logging in or signing up.
                                    </Text>
                                    <TouchableOpacity
                                          style={styles.button}
                                          onPress={() => {
                                                navigation.navigate('Login');
                                          }}
                                          
                                    >
                                        
                                          <Text style={styles.buttonText}> Get started    
                                                <Icon name="arrow-forward-outline" size={20} color="#fff" />
                                          </Text>
                                    </TouchableOpacity>
                              </View>
                              <View>
                                    <Switch
                                          trackColor={{ false: "#767577", true: "#81b0ff" }}
                                          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                          onValueChange={toggleSwitch}
                                          value={isEnabled}
                                    />
                                    <Text style={!theme ? { color: "black" } : { color: "white" }}>Change mode</Text>
                              </View>
                        </View>
                  </View>
            </Background>
      );
};

export default GetStartPage;