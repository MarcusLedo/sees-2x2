import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const aigis = require("../assets/images/Aigis.jpg");
const makoto = require("../assets/images/Makoto.jpg");
const mitsuru = require("../assets/images/Mitsuru.jpg");
const koromaru = require("../assets/images/Koromaru.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.childContainer]}>
        <ImageBackground
          source={makoto}
          style={styles.image}
          imageStyle={styles.imageShiftMakoto}
        ></ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle1}>Done and Dusted.</Text>
            <Text style={styles.textStyle1}></Text>
          </View>
        </View>
      </View>

      <View style={[styles.childContainer]}>
        <ImageBackground
          source={koromaru}
          style={styles.image}
          imageStyle={styles.imageShiftKoromaru}
        ></ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle1}>Woof! Woof! Woof!</Text>
            <Text style={styles.textStyle1}></Text>
          </View>
        </View>
      </View>

      <View style={[styles.childContainer]}>
        <ImageBackground
          source={aigis}
          style={styles.image}
          imageStyle={styles.imageShiftAigis}
        ></ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle1}>Target</Text>
            <Text style={styles.textStyle1}>Neutralized.</Text>
          </View>
        </View>
      </View>

      <View style={[styles.childContainer]}>
        <ImageBackground
          source={mitsuru}
          style={styles.image}
          imageStyle={styles.imageShiftMitsuru}
        ></ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle1}>Kneel before me.</Text>
            <Text style={styles.textStyle1}></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  childContainer: {
    width: "50%",
    height: "50%",
    alignItems: "stretch",
    backgroundColor: "black",
  },

  contentContainer: {
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -80 }, { translateY: -40 }],
    width: "80%",
    height: "30%",
  },

  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle1: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },

  textStyle2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },

  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    overflow: "hidden",
  },

  imageShiftAigis: {
    width: "220%",
    resizeMode: "cover",
    transform: [{ translateX: -240 }],
  },

  imageShiftMakoto: {
    width: "272%",
    resizeMode: "cover",
    transform: [{ translateX: -350 }],
  },

  imageShiftMitsuru: {
    width: "300%",
    resizeMode: "cover",
    transform: [{ translateX: 0 }],
  },

  imageShiftKoromaru: {
    width: "270%",
    resizeMode: "cover",
    transform: [{ translateX: -189 }],
  },
});
