import React from 'react';
import { View, StyleSheet, ScrollView , ImageBackground} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer, CommonActions } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppBar } from './components/AppBar';
import { BackAction } from './components/BackAction';
import { Iot_bottom_card } from './components/buttons/home_page/iot_bottom_card';

import { Test } from './pages/test';
import { Home } from './pages/home';
import {VideoComponent} from './pages/iot_video';

import { styles } from './styles/style';
import { Asset } from 'expo-asset';


const Tab = createBottomTabNavigator();
const image = { uri: Asset.fromModule(require('./assets/background.jpg')).uri };

export default function MyComponent() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          style = {styles.bottomNav}
          navigationState={state}
         safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
             navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key];
            if (options.tabBarIcon) {
              return options.tabBarIcon({ focused, color, size: 24 });
            }

            return null;
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.title;

            return label;
          }}
        />
      )}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="google-analytics" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings2"
        component={SettingsScreen2}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="google-lens" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings3"
        component={SettingsScreen3}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="leaf" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Settings4"
        component={SettingsScreen4}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="account-multiple" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <SafeAreaProvider>
      <AppBar />
      <View style={styles.view_container}>
      <ImageBackground source={image} style={styles.image}>
    <ScrollView>  
    <Home/>
    
    </ScrollView>
    </ImageBackground>
    </View>
  </SafeAreaProvider>
  );
}
     
function SettingsScreen() {
  return (
    <SafeAreaProvider>
      <AppBar />
      <View style={styles.view_container}>
      <ImageBackground source={image} style={styles.image}>
    <ScrollView>  
    <BackAction />
    <Test/>
    <Test/>
    </ScrollView>
    </ImageBackground>
    </View>
  </SafeAreaProvider>
  );
}

function SettingsScreen2() {
  return (
    <SafeAreaProvider>
      <AppBar />
      <View style={styles.view_container}>
      <VideoComponent/>
      <Iot_bottom_card/>
    </View>
  </SafeAreaProvider>
  );
}

function SettingsScreen3() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

function SettingsScreen4() {
  return (
    <View style={styles.btm_container}>
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

