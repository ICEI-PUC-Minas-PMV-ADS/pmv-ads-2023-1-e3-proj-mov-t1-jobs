import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

function Inicio() {
  return (
    <LinearGradient colors={['#081B39', '#051326', '#040F25']} style={{flex: 1, justifyContent: 'center', alignTtems: 'center'}}>
      <Text>Início!</Text>
    </LinearGradient>
  );
}

function CadastrarServico() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('CadastroServico');
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No nosso app, você pode cadastrar os serviços que desejar! Para inicar, toque abaixo:</Text>
      <Button title="Cadastrar Serviço" onPress={handlePress}></Button>
    </View>
  );
}

function BuscarServico() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Buscar Serviço!</Text>
    </View>
  );
}

function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
      <Tab.Navigator
        initialRouteName="Início"
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
            tabBarLabel: 'Buscar Serviço',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cadastrar Serviço"
          component={CadastrarServico}
          options={{
            tabBarLabel: 'Cadastrar Serviço',
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
