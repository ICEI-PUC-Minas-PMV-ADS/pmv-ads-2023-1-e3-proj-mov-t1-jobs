import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Alert, TouchableOpacity } from 'react-native';
import { useAuth } from './AuthContext';

import Perfil from './Perfil';
import CadastroServico from './CadastroServico';
import Inicio from './Inicio';

const Tab = createBottomTabNavigator();

export default function Principal({navigation}) {

    const signOut = (navigation) => {
      navigation.reset({
        index: 0,
        routes: [{name: "Login"}]
    })
  }

    const handleLogout = () => {
      Alert.alert('Logout', 'Tem certeza que deseja sair?', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: () => signOut(navigation) },
      ]);
    };

  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'Cadastro de serviços') {
            iconName = 'plus';
          } else if (route.name === 'Perfil') {
            iconName = 'account';
          } else if (route.name === 'Logout') {
            iconName = 'logout';
          }

          if (route.name === 'Logout') {
            return (
              <TouchableOpacity onPress={handleLogout}>
                <MaterialCommunityIcons name={iconName} color={color} size={size} />
              </TouchableOpacity>
            );
          }

          return <MaterialCommunityIcons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Inicio" component={Inicio} />
      <Tab.Screen name="Cadastro de serviços" component={CadastroServico} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Logout" component={Inicio} />
    </Tab.Navigator>
  );
}