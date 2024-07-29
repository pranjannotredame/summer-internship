import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GetStartPage from './src/getStartPage';
import GetLoginPage from './src/loginPage';
import GetSignupPage from './src/signupPage';
import GetProductPage from './src/productPage';
import GetProductList from './src/productListPage';
import Cart from './src/cart';
import GetDashBoard from './src/dashboard';
import FavoriteContextProvider from './src/Context/contextapi';
import Logout from './src/logout';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from './src/ProfileScreen';
import SettingsScreen from './src/SettingScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'DashBoard') {
            iconName = 'speedometer-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={GetStartPage}
        options={{ title: '' }}
      />
      <Stack.Screen
        name='Login'
        component={GetLoginPage}
        options={{ title: 'Login' }}
      />
      <Stack.Screen
        name='Signup'
        component={GetSignupPage}
        options={{ title: 'Signup' }}
      />
      <Stack.Screen
        name='products'
        component={GetProductPage}
        options={{ title: 'Products' }}
      />
      <Stack.Screen
        name='productList'
        component={GetProductList}
        options={{ title: 'Product List' }}
      />
      <Stack.Screen
        name='dashBoard'
        component={GetDashBoard}
        options={{ title: 'Dashboard' }}
      />
      <Stack.Screen 
        name='Cart' 
        component={Cart}
        options={{ title: 'Cart' }} 
      />
    </Stack.Navigator>
  );
}

function MainTabNavigator() {
  return (
    <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'DashBoard') {
          iconName = 'speedometer-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
        } else if (route.name === 'Settings') {
          iconName = 'settings-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      headerShown: false,
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="DashBoard" component={(GetDashBoard)} />
      <Tab.Screen name="Profile" component={(ProfileScreen)} />
      <Tab.Screen name="Settings" component={(SettingsScreen)} />
    </Tab.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    screenOptions={({ route }) => ({
      drawerIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Cart') {
          iconName = 'cart-outline';
        } else if (route.name === 'Dashboard') {
          iconName = 'speedometer-outline';
        } else if (route.name === 'Logout') {
          iconName = 'log-out-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
    options={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
      >
      <Drawer.Screen name="Home" component={MainTabNavigator} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Dashboard" component={GetDashBoard} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <FavoriteContextProvider>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </FavoriteContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
