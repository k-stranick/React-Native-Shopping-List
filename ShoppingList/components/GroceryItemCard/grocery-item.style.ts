import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 150,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  textContainer: {
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    fontWeight: "400",
    color: "#333",
    textAlign: "center",
  },
});
