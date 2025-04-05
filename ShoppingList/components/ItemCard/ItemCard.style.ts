import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    maxWidth: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 12,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
  textContainer: {
    alignItems: "center",
  },
  price: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
});
