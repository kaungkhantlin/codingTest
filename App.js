/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import {Scene, Router, Tabs, Stack} from 'react-native-router-flux';
import configs from './src/utils/configs';
import IonIcon from 'react-native-vector-icons/Ionicons';

const iconTab = ({focused, iconName}) => {
  let iconColor = focused ? configs.colors.black : configs.colors.grey;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <IonIcon style={{color: iconColor}} name={iconName} size={24} />
    </View>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router>
        <Scene key="root" wrap={false} hideNavBar headerLayoutPreset="center">
          <Tabs tabBarPosition="bottom" showLabel={false} key="MainTab">
            <Scene
              key="FirstScreen"
              hideNavBar
              component={FirstScreen}
              icon={iconTab}
              iconName="home"
            />
            <Scene
              key="SecondScreen"
              hideNavBar
              component={SecondScreen}
              icon={iconTab}
              iconName="menu"
            />
          </Tabs>
        </Scene>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
