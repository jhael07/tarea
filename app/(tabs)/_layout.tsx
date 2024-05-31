import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
          title: "Inicio",
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          tabBarIcon: () => (
            <FontAwesome5 name="calculator" size={19} color="black" />
          ),
          title: "Calculadora",
        }}
      />
      <Tabs.Screen
        name="translate"
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="translate" size={20} color="black" />
          ),
          title: "Traductor",
        }}
      />
      <Tabs.Screen
        name="multiply"
        options={{
          title: "multiplicacion",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="calculator-variant"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="personal-experience"
        options={{
          title: "Experiencia",
          tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
};

export default layout;
