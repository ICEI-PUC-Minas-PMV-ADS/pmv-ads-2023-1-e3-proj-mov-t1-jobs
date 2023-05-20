import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#278ED5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    width: 350,
    borderRadius: 10,
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    flexGrow: 1,
    height: 40,
    borderBottomColor: "#999",
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
  containerHome: {
    flex: 1,
    backgroundColor: "#278ED5",
    justifyContent: 'center',
    alignItems: 'center',
  }
});

  export default styles