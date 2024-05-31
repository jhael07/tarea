import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./calculator";
import { numberTranslator } from "@/assets/NumbersTranslator";

const translate = () => {
  const [numberToWord, setNumberToWord] = useState<number | null>();
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        Traduce de numero a letras del 1 al 1000
      </Text>

      <TextInput
        style={[
          styles.inputStyle,
          {
            width: "90%",
            alignSelf: "center",
            marginTop: 20,
            paddingVertical: 10,
          },
        ]}
        placeholder="Escribe un numero"
        keyboardType="number-pad"
        onChangeText={(text) => {
          setNumberToWord(+text);
        }}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "600",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        {numberToWord
          ? (numberTranslator as any)[Number(numberToWord ?? 0)]
              .toString()[0]
              .toUpperCase() +
            (numberTranslator as any)[Number(numberToWord ?? 0)]
              .toString()
              .substring(
                1,
                (numberTranslator as any)[Number(numberToWord ?? 0)].length
              )
          : ""}
      </Text>
    </View>
  );
};

export default translate;
