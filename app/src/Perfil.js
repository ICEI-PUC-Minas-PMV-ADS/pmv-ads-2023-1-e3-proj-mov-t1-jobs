import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';


export default function Perfil({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Perfil!</Text>
        <Button
            icon={
            <Icon
                name="check"
                size={15}
                color="white"
                />
        }
        title="Sair"
        onPress={() => ListAccordionGroupContext(navigation)}
        />
      </View>
    );
  }