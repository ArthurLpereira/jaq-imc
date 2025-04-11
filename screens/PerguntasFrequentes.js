import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const PerguntasFrequentes = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.headerText}>PERGUNTAS</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.question}>O que é o IMC (Índice de Massa Corporal)?</Text>
        <Text style={styles.answer}>
          O IMC é uma medida utilizada para avaliar se uma pessoa possui um peso adequado em relação à sua altura.
          É calculado dividindo o peso (em quilogramas) pela altura (em metros) ao quadrado.
        </Text>

        <Text style={styles.question}>É um indicador confiável de saúde?</Text>
        <Text style={styles.answer}>
          O IMC é classificado em diferentes categorias: Abaixo do peso (&lt; 18.5), Peso normal (18.5 - 24.9),
          Sobrepeso (25 - 29.9), Obesidade Grau I (30 - 34.9), Obesidade Grau II (35 - 39.9) e Obesidade Grau III (≥ 40).
        </Text>

        <Text style={styles.question}>Quais são as limitações do IMC?</Text>
        <Text style={styles.answer}>
          O IMC é uma ferramenta útil para uma avaliação inicial, mas não deve ser o único indicador de saúde.
          Fatores como composição corporal, massa muscular, idade, gênero e outros aspectos devem ser considerados.
        </Text>

        <Text style={styles.question}>Quais são as limitações do IMC?</Text>
        <Text style={styles.answer}>
          O IMC não diferencia entre massa muscular e gordura corporal, podendo não ser adequado para atletas,
          idosos, gestantes e pessoas com composições corporais específicas. Para uma avaliação mais precisa,
          é recomendada consulta com profissionais de saúde.
        </Text>

        <Text style={styles.question}>Como posso melhorar meu IMC?</Text>
        <Text style={styles.answer}>
          Para melhorar seu IMC, é importante manter um estilo de vida saudável com alimentação equilibrada
          e prática regular de exercícios físicos. Consulte um profissional de saúde para orientações personalizadas.
        </Text>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 - Desenvolvido po J.A.C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 20,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  header: {
    backgroundColor: '#36539b',
    paddingVertical: 20,
    alignItems: 'center',
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  question: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
  },
  answer: {
    fontSize: 14,
    marginTop: 5,
    lineHeight: 22,
    color: '#333',
  },
  footer: {
    backgroundColor: '#36539b',
    padding: 12,
    alignItems: 'center'
  },
  footerText: {
    color: '#fff',
    fontSize: 14
  }
});

export default PerguntasFrequentes;