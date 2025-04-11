import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

export default function ResultadoScreen() {
  const route = useRoute();
  const { peso, altura } = route.params;
  const imc = (parseFloat(peso) / (parseFloat(altura) ** 2)).toFixed(2);
  let image ='';
  let text = '';

  if(imc <= 18.5){
    image = require('../assets/abaixo.png')
    text = 'Abaixo do normalProcure um médico. Alguns problemas de saúde podem estar associados a este quadro. Outrospodem se desenvolver pela falta de nutrientes. É preciso descobrir o que está por trás do caso'
  }else if(imc > 18.5 && imc < 24.9){
    image = require('../assets/normal.png')
    text = 'NormalQue bom que você está com peso normal! Mas não se esqueça: isso é o resultado de uma alimentação equilibrada e estilo de vida saudável.'
  }else if(imc >= 25 && imc < 29.9){
    image = require('../assets/sobrepeso.png')
    text = 'SobrepesoE, se na verdade, ainda parece tudo normal, o excesso de peso já pode estar associado com doenças como hipertensão e diabetes. O ideal é rever hábitos de vida.'
  }else if(imc >= 30 && imc < 39.9){
    image = require('../assets/obeso.png')
    text = 'Obesidade II Sinal de alerta! Chegou no nível em que o risco de doenças associadas está aumentado. Não é hora de descuido. Cuide do seu peso com alimentação balanceada e atividade física. Se necessário, conte com acompanhamento endocrinológico.'
  }else if(imc >= 40){
    image = require('../assets/opeso3.png')
    text = 'Obesidade grau III Aqui o sinal é vermelho, com forte probabilidade de já existir doenças associadas, como diabetes, hipertensão e doenças cardiovasculares. Procure um médico o mais rápido possível'
  }

  return (
    <View style={styles.container}>
       <View style={styles.imageCorpo}>
  <Image
    source={image}
    style={{ width: '100%', height: '70%', resizeMode: 'contain' }}
  />
</View>
    <View style={styles.divText}>
      <Text style={styles.result}>Seu IMC é: {imc}</Text>
      <Text style={{fontSize:18,color:'#334E92',}}>{text}</Text>
    </View>
    <View style={styles.grafico}>
        <Image style={styles.grafico} source={require('../assets/grafico.png')}></Image>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'start', alignItems: 'center',flexDirection: 'row',    position: 'relative',
  },
  imageCorpo: {
    width: '50%',
    height: '70%', 
    alignItems: 'center', 
    position: 'absolute',
    top:0,

  },
  Text:{
    color: '#334E92',
  },
  grafico:{
    width: '100%',
    height: '33%',
    resizeMode: 'cover',
    marginTop: 130,
  },
  divText:{ width: '50%',
    height: '30%', 
    alignItems: 'center',
    position: 'absolute',
    top:80,
    color:'#334E92',
    left:'50%',
    display: 'flex',alignItems:'center',justifyContent: 'center' },
  result: { fontSize: 24, fontWeight: 'bold', color: '#36539b' },
});
