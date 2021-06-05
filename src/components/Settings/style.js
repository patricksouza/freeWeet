import { StyleSheet } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1c1c1c",
  },
  ItemContainer: {
    color: "white",
    textAlign: "center",
    padding: 10,
    margin:5,
    fontSize: 14,
    height: 44,
    width: 340,
    borderWidth: 0.5,
    borderColor:"rgba(255,255,255,0.4)",
    borderBottomColor: "rgba(145, 61, 136, 1)",
    borderRightColor:"rgba(145, 61, 136, 1)"
  },
  SectionHeader: {
    padding: 15,
    fontSize: 20,
    color: "white",
    textAlign: "left",
  },
});
