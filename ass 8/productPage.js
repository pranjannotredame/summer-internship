import React, { useState, useContext } from "react";
import styles from "./style";
import products from "./data";
import { FavoriteContext } from "./Context/contextapi";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";

  const GetProductPage = ({ navigation }) => {
  const FavoriteItem = useContext(FavoriteContext);

  const RemoveFromFav = (id) => {
    alert(`${id} item removed from cart`)
    console.log("removing", id);
    FavoriteItem.removeFromFavroiteItem(id);
  };

  const AddToCart = (id) => {
    alert(`${id} item added to cart`)
    console.log("adding to cart", id);
    FavoriteItem.addFavroiteItem(id);
  };

  const renderItem = ({ item }) => ( 
    <View style={styles.productContainer}>
     
      <View>
        <Image
          style={{ height: 360, width: 260 }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{item.title}</Text>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={{ fontSize: 10 }}>
          Rating: {item.rating.rate} ({item.rating.count})
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buy Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => AddToCart(item.id)}
          >
            <Image
              source={require("../assets/cart.png")}
              style={{
                height: 80,
                width: 80,
                alignContent: "center",
                flex: 1,
              }}
            />
            
          </TouchableOpacity>
          <TouchableOpacity onPress={() => RemoveFromFav(item.id)}>
            <Text style={{ color: "red", fontSize: 40 }}>❌</Text>
          </TouchableOpacity>
        </View>
      </View>
     </View>

     
     
  );

  return (
  
      <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.productList}
    />
  );
};

export default GetProductPage;
