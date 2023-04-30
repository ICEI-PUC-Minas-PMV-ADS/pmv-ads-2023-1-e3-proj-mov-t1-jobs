import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      color: 'white',
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    maskedInput: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomColor: "#999",
      borderBottomWidth: 1,
      borderStyle: "solid",
      alignSelf: "flex-start"
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
    },
    errorMessage: {
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "#f00",
      fontSize: 12
    },
    inputNumber: {
      marginLeft: 10,
      fontWeight: 'bold',
      color: "#86919A",
      fontSize: 16
    },
    headerCadastro: {
      backgroundColor: '#BFBDB8',
      marginBottom: 40,
      height: 100,
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
    }

    
  });

  export default styles