import React, { useContext } from "react";
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

const Cart = ({ navigation }) => {
  const FavoriteItem = useContext(FavoriteContext);
  const favoriteItems = FavoriteItem.ids; 

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
      </View>
    </View>
  );

  // Filter products to show only favorite items
  const favoriteProducts = products.filter((product) =>
    favoriteItems.includes(product.id)
  );

  return (
    
    <FlatList
      data={favoriteProducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.productList}
    />
  
  );
};

export default Cart;
