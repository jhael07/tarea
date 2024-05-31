import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

const calculator = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);

  return (
    <View>
      <View
        style={{
          alignItems: "center",
          margin: 0,
          marginTop: 16,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Sumar dos Numeros:
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Numero 1"
          keyboardType="number-pad"
          onChangeText={(text) => {
            setNumberA(+text);
          }}
        />
        <Text>+</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Numero 2"
          onChangeText={(text) => {
            setNumberB(+text);
          }}
          keyboardType="number-pad"
        />
        <Text>=</Text>
      </View>
      <Text style={{ alignSelf: "center", fontSize: 20, marginTop: 20 }}>
        {numberA + numberB}
      </Text>
    </View>
  );
};

export default calculator;

export const styles = StyleSheet.create({
  inputStyle: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 12,
    width: 120,
    fontSize: 16,
  },

  inputContainer: {
    alignSelf: "center",
    flexDirection: "row",
    margin: 0,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
});
