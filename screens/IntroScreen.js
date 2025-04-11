import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Image
        source={require('../assets/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36539b',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'aliceblue',
    fontSize: 24,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    marginTop:20,
  },
  image: {
    width: 300,
    marginTop: 25,
  },
});