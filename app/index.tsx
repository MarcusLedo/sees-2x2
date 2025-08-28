import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

const aigis = require("../assets/images/Aigis.jpg");
const makoto = require("../assets/images/Makoto.jpg");
const junpei = require("../assets/images/Junpei.jpg");
const koromaru = require("../assets/images/Koromaru.jpg");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={[styles.childContainer]}>
        <ImageBackground
          source={makoto}
          style={styles.image}
          imageStyle={styles.imageShiftMakoto}
        >
          <Text>1</Text>
        </ImageBackground>
      </View>

      <View style={[styles.childContainer]}>
        <ImageBackground
          source={koromaru}
          style={styles.image}
          imageStyle={styles.imageShiftKoromaru}
        >
          <Text>2</Text>
        </ImageBackground>
      </View>

      <View style={[styles.childContainer]}>
        <ImageBackground
          source={aigis}
          style={styles.image}
          imageStyle={styles.imageShiftAigis}
        >
          <Text>3</Text>
        </ImageBackground>
      </View>

      <View style={[styles.childContainer]}>
        <ImageBackground
          source={junpei}
          style={styles.image}
          imageStyle={styles.imageShiftJunpei}
        >
          <Text>4</Text>
        </ImageBackground>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },

  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
    overflow: "hidden",
  },

  imageShiftAigis: {
    width: "220%",
    resizeMode: "cover",
    transform: [{ translateX: -240 }],
  },

  imageShiftMakoto: {
    width: "270%",
    resizeMode: "cover",
    transform: [{ translateX: -350 }],
  },

  imageShiftJunpei: {
    width: "260%",
    resizeMode: "cover",
    transform: [{ translateX: -290 }],
  },

  imageShiftKoromaru: {
    width: "270%",
    resizeMode: "cover",
    transform: [{ translateX: -189 }],
  },
});
