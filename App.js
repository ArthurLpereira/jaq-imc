import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import PerguntasFrequentes from './screens/PerguntasFrequentes';
import CalculoScreen from './screens/CalcImc';
import IntroScreen from './screens/IntroScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início">
        <Drawer.Screen name="Início" component={IntroScreen} />
        <Drawer.Screen name="Sobre" component={HomeScreen} />
        <Drawer.Screen name="Perguntas" component={PerguntasFrequentes} />
        <Drawer.Screen name="Calculo" component={CalculoScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
