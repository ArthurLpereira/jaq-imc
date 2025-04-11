import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Logo from './assets/logo_jac.png';
// Pegando a largura da tela
const larguraDaTela = Dimensions.get('window').width;
const AlturaDaTela = Dimensions.get('window').height / 1.3;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.DivHome, { width: larguraDaTela, height: AlturaDaTela }]}>
        <Image source={Logo} style={styles.imagem} />

      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  DivHome: {
    backgroundColor: '#36539B',
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
