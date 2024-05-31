import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./calculator";

const multiply = () => {
  const [table, setTable] = useState<
    { numberA: number; numberB: number; result: number }[]
  >([]);
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          marginTop: 20,
          width: "90%",
          alignSelf: "center",
        }}
      >
        Ingrese un numero para ver su tabla de multiplicacion hasta el 13:
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
          const table = [];
          for (let i = 1; i <= 13; i++) {
            table.push({
              numberA: Number(text),
              numberB: i,
              result: Number(text) * i,
            });
          }
          setTable(table);
        }}
      />

      <View style={{ alignSelf: "center" }}>
        {table
          ? table.map((item) => {
              return (
                <Text>
                  {item.numberA} x {item.numberB} = {item.result}
                </Text>
              );
            })
          : ""}
      </View>
    </View>
  );
};

export default multiply;
