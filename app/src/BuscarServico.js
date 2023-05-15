import * as React from 'react';
import { TextInput, View, Button, Image } from 'react-native';
import styles from '../style/MainStyle';


export default function BuscarServico() {
    return (
            <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, borderColor: 'gray', borderWidth: 2, borderRadius: 10, paddingLeft: 30, marginTop: 20, }}>
            <Image
              source={require('../assets/lupa.png')}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <TextInput
              placeholder="Pesquisar"
              style={{ flex: 1, height: 40 }}
            />
                  </View>
    );
}
  