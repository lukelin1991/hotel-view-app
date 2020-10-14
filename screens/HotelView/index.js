import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { colors } from '../../styles'
import Header from './components/Header'


export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        
        <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg
  },
});