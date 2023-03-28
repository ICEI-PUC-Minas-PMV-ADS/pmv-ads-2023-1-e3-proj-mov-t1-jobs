import React, { useState } from 'react';
import { Text, View } from 'react-native'
import { Button, Icon } from 'react-native-elements';

export default function Buscar({ navigation }) {

  const entrar = () => {
    navigation.reset({
      idex: 0,
      routes: [{ name: "Cadastro" }]
    })
  }

  return (
    <View>
      <Text>Entrou</Text>
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title=" Próxima página"
        onPress={() => entrar()}
      />
    </View>
  )
}


