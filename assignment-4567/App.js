import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Gettingstarted from './components/Gettingstarted';
import Signup from './components/SignUp';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Product from './components/Product';

const App = () => {
  const [currentPage, setCurrentPage] = useState('GettingStarted');
  const [username, setUsername] = useState('');

  const handlePageChange = (page, user) => {
    setUsername(user || username);
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      {currentPage === 'GettingStarted' && (
        <Gettingstarted onGettingStarted={() => handlePageChange('Signup')} />
      )}
      {currentPage === 'Signup' && (
        <Signup onSignup={(user) => handlePageChange('Login', user)} />
      )}
      {currentPage === 'Login' && (
        <Login onLogin={() => handlePageChange('Welcome')} />
      )}
      {currentPage === 'Welcome' && (
        <Welcome
          username={username}
          onProductPage={() => handlePageChange('Product')}
          onLogout={() => handlePageChange('GettingStarted')}
        />
      )}
      {currentPage === 'Product' && (
        <Product
          username={username}
          onLogout={() => handlePageChange('Login')}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8B8D1',
  },
});

export default App;