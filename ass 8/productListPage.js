import React from 'react';
import { Text, View, SectionList,StyleSheet } from 'react-native';
import Data from './sectionData';
import Background from "../Background";
import backgroundImage from '../assets/back.jpg';

const GetProductList = () => {
  return (
    <Background source={backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <SectionList
        sections={Data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text >{item}</Text>
        )}
        renderSectionHeader={({ section: { productcategory } }) => (
          <Text style={styles.header}> {productcategory} </Text>
        )}
      />
    </View>
    </Background>
  );
};

export default GetProductList;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    fontSize: 20,
    color: 'black',
    padding: 10,
  },
  header:{
    fontWeight: 'bold',
    fontSize: 24,
    backgroundColor: '#a8f8f8',
    padding: 10,
  },
});