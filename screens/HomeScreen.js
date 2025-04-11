import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Image source={require('../assets/logo_jac.png')} style={styles.logo} />

        <Text style={styles.title}>Bem-vindo</Text>
        <Text style={styles.subtitle}>à Calculadora de IMC</Text>

        <Text style={styles.description}>
          Avalie seu índice de massa corporal com base nos padrões da OMS.
        </Text>

        <Text style={styles.paragraph}>
          Utilize esta ferramenta para calcular o Índice de Massa Corporal (IMC),
          um parâmetro amplamente utilizado para avaliar se o peso está adequado em
          relação à altura.
        </Text>

        <Text style={styles.paragraph}>
          Informe seus dados e obtenha uma análise rápida e precisa da sua
          classificação nutricional conforme os padrões da Organização Mundial da
          Saúde (OMS).
        </Text>

        <Image source={require('../assets/pessoas_exercicio.png')} style={styles.exercicio} />

        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: '#3949AB',
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 15,
  },
  description: {
    color: '#D1D1D1',
    fontSize: 14,
    marginBottom: 15,
  },
  paragraph: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 10,
    lineHeight: 20,
  },
  exercicio: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: '#3949AB',
    fontWeight: 'bold',
  },
});