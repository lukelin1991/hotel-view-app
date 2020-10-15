import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors } from '../../styles'
import Header from './components/Header'
import Bookmark from './components/Bookmark'
import About from './components/About'
import Stats from './components/Stats'

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        
        <Header />

        <View>
            <Bookmark />
            <About />
            <Stats />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  },
});