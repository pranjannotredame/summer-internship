import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';


const products = [
  {
    id: '1',
    name: 'Product 1',
    price: '$20',
    discount: '10%',
    description: 'Shoe',
    image: 'https://static.nike.com/a/images/t_default/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9dbb19ec-29e0-428f-b6e0-188d7ec8cc90/air-jordan-1-mid-shoes-86f1ZW.png',
  },
  {
    id: '2',
    name: 'Product 2',
    price: '$20',
    discount: '20%',
    description: 'Shirt',
    image: 'https://www.punekarcotton.com/cdn/shop/products/sky-blue-color-combed-cotton-shirts-for-men-917411.jpg?v=1705569613&width=1500',
  },
  {
    id: '3',
    name: 'Product 3',
    price: '$30',
    discount: '30%',
    description: 'Glass',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk1ib2dkSaHVHwKf2YvO7J-D--_-6abCx-Mg&s',
  },
];

const Product = ({ username, onLogout, onGoToCart }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
      alert(`${product.name} added to cart!`);
    } else {
      alert(`${product.name} is already in the cart!`);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productDiscount}>{item.discount}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => addToCart(item)}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Products for {username}</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.goToCartButton}
          onPress={onGoToCart}
        >
          <Text style={styles.goToCartButtonText}>Go to Cart</Text>
        </TouchableOpacity>
        <Button title="Logout" onPress={onLogout} color="#6200EE" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#B8B8D1',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#E0E1E1',
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#007BFF',
  },
  productDiscount: {
    fontSize: 14,
    color: '#FF5722',
  },
  productDescription: {
    fontSize: 14,
    color: '#616161',
  },
  addToCartButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  goToCartButton: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#6200EE',
    borderRadius: 5,
  },
  goToCartButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Product;
