import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import Perfil from './Perfil';
import CadastroServico from './CadastroServico';
import Inicio from './Inicio';
import BuscarServico from './BuscarServico';

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
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#000',
        }}
      >
        <Tab.Screen
          name="Início"
          component={Inicio}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Buscar Serviço"
          component={BuscarServico}
          options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cadastro de serviços"
          component={CadastroServico}
          options={{
            tabBarLabel: 'Cadastrar serviço',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}