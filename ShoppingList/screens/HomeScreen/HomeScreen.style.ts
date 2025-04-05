// import { StyleSheet } from "react-native";
// // import { colors, spacing } from "../shared/themes/theme";


// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#f5f5f5",
//         paddingTop: 48,
//         paddingHorizontal: 16,
//     },
//     title: {
//         fontSize: 22,
//         fontWeight: "700",
//         color: "#4CAF50",
//         marginBottom: 20,
//         textAlign: "center",
//     },
//     cartTitle: {
//         fontSize: 16,
//         fontWeight: "600",
//         color: "#333",
//         marginTop: 20,
//         textAlign: "center",
//     },
//     listContainer: {
//         paddingBottom: 24,
//         justifyContent: "space-between",
//     },
//     separator: {
//         height: 16,
//     },
// });

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingTop: 32,
        paddingHorizontal: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 16,
        color: "#333",
    },

    listContainer: {
        paddingBottom: 16, // extra space at bottom for scrolling
    },

    cartTitle: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        color: "#444",
        marginTop: 16,
    },
});
