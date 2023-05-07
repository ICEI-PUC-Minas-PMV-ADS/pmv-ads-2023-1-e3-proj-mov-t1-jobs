import * as React from 'react';
import { Text, View } from 'react-native';
import styles from '../style/MainStyle';


export default function Inicio({navigation}) {
    return (
      <View style={styles.containerHome}>
        <Text>Início!</Text>
      </View>
    );
  }