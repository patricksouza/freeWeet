import { StyleSheet } from "react-native";
//import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#121212",
  },
  Button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ButtonText: {
    backgroundColor: "black",
    padding: 10,
    color: "red",
    fontSize: 15,
    fontWeight: "bold",
  },
  tabHome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabNewWeet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
