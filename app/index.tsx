import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.childContainer, styles.blue]}>
        <Text>1</Text>
      </View>

      <View style={[styles.childContainer, styles.orange]}>
        <Text>2</Text>
      </View>

      <View style={[styles.childContainer, styles.yellow]}>
        <Text>3</Text>
      </View>

      <View style={[styles.childContainer, styles.red]}>
        <Text>4</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
  },

  childContainer: {
    display: "flex",
    minWidth: "50%",
    minHeight: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  red: {
    backgroundColor: "#ff0045",
  },

  blue: {
    backgroundColor: "#90dadb",
  },

  yellow: {
    backgroundColor: "#ffd800",
  },

  orange: {
    backgroundColor: "#fb8500",
  },
});
