import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1c1c1c",
  },
  FormContainer: {
    backgroundColor: "#1e1e1e",
    padding: 10,
    margin: 100,
    paddingTop: 50,
    paddingBottom: 50,
    width: 350,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
    alignItems: "center",
  },
  ButtonForm: {
    backgroundColor:"transparent",
    borderWidth: 0.5,
    borderColor:"rgba(255,255,255,0.2)",
    borderBottomColor: "rgba(145, 61, 136, 1)",
    padding: 12,
    width: 100,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  ButtonFormText: {
    color: "white",
    textTransform: "uppercase",
    textAlign:"center"
  },
  TextFieldContainer: {
    alignItems: "center",
    margin: 15,
  },
  TextFieldLabel: {
    fontSize: 15,
  },
  TextFieldInput: {
    borderWidth: 0.5,
    borderColor: "transparent",
    borderBottomColor: "white",
    color: "white",
    width: 300,
    textAlign: "center",
  },
  BorderError: {
    borderWidth: 1,
    borderColor: "rgba(200,0,50,1)",
  },
  ErrorMessage: {
    fontSize: 12,
    color: "rgba(200,0,50,1)",
    textAlign: "center",
    marginTop: 5,
  },
});
