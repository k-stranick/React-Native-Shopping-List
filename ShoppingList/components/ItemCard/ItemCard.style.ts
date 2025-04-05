// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     margin: 8,
//     // minWidth: 150,
//     maxWidth: "100%",
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 16,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 1, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   imageContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 8,
//   },
//   image: {
//     aspectRatio: 1,
//     width: "100%",
//     height: 100,
//     borderRadius: 8,
//     marginBottom: 12,
//     resizeMode: "contain",
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: "600",
//     textAlign: "center",
//     color: "#333",
//   },
//   textContainer: {
//     alignItems: "center",
//   },
//   price: {
//     fontSize: 14,
//     color: "#666",
//     marginTop: 4,
//     marginBottom: 8,
//   },
//   addButton: {
//     backgroundColor: "#4CAF50",
//     paddingVertical: 6,
//     paddingHorizontal: 12,
//     borderRadius: 6,
//   },
//   addButtonText: {
//     color: "#fff",
//     fontWeight: "500",
//   },
// });

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    // Let FlatList + numColumns control the width
    flex: 1,
    margin: 8,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: '#ccc',

    // Basic shadow/elevation for Android + iOS
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,

    // Align content
    alignItems: "center",
  },

  imageContainer: {
    // fill width of the card
    width: "100%",
    // keep aspect ratio
    aspectRatio: 1,
    overflow: "hidden",
    borderRadius: 8,
  },

  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "contain",
  },

  textContainer: {
    marginTop: 8,
    alignItems: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },

  price: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    textAlign: "center",
  },

  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
