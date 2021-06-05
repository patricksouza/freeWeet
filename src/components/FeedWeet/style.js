import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#1c1c1c",
  },
  sectionHeader: {
    padding: 15,
    fontSize: 24,
    color: "white",
    textAlign: "left",
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: "white",
  },
  card: {
    backgroundColor: "#262626",
    margin: 10,
    padding: 0,
    borderWidth: 0.5,
    borderColor:"rgba(255,255,255,0.2)",
    borderTopColor: "rgba(145, 61, 136, 1)",
  },
  Content: {
    padding: 10,
    fontSize: 15,
    color: "white",
  },
  Title: {
    padding: 10,
    fontSize: 20,
    color: "white",
  },
  Datetime: {
    padding: 5,
    fontSize: 10,
    textAlign: "left",
    color: "white",
  },
});
