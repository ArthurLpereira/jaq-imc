import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CalculoScreen() {
  const navigation = useNavigation();

  const [tipoPessoa, setTipoPessoa] = useState('adulto');
  const [sexo, setSexo] = useState('homem');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const handleCalcular = () => {
    if (!peso || !altura) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    navigation.navigate('Resultado', {
      tipoPessoa,
      sexo,
      peso: parseFloat(peso),
      altura: parseFloat(altura)
    });
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Calculo de Massa Corporea</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          placeholder="PESO (kg)"
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <TextInput
          placeholder="ALTURA (m)"
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <TouchableOpacity style={styles.button} onPress={handleCalcular}>
          <Text style={styles.buttonText}>CALCULAR</Text>
        </TouchableOpacity>

        <Text style={styles.note}>
          *Chegamos ao número índice de massa corporal de um adulto pelo seu peso em quilos (por exemplo, 80 kg), dividido por sua altura ao quadrado (vamos imaginar, 1,80 m x 1,80 m).
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 - Desenvolvido po J.A.C</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eef2f7',
  },
  header: {
    backgroundColor: '#7eaaff',
    paddingVertical: 20,
    alignItems: 'center',
    paddingTop: 60,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    backgroundColor: '#dbe4f0',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  note: {
    fontSize: 12,
    color: '#444',
    marginTop: 20
  },
  footer: {
    backgroundColor: '#7eaaff',
    padding: 12,
    alignItems: 'center'
  },
  footerText: {
    color: '#fff',
    fontSize: 14
  }
});
