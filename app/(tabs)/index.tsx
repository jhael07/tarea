import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const index = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/perfil.png")}
          style={styles.imageStyle}
        />
      </View>

      <View style={{ marginTop: 20, alignItems: "center", gap: 5 }}>
        <PersonalInfo label="Nombre" value="Jhael Antonio Rodriguez " />
        <PersonalInfo label="Correo" value="20220296@itle.edu.do  " />
      </View>
    </View>
  );
};

export default index;

const PersonalInfo = ({ label, value }: { label: string; value: string }) => {
  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      <Text style={{ fontWeight: "bold" }}>{label}: </Text>
      <Text>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  imageStyle: {
    height: 140,
    width: 140,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: "black",
  },
});
