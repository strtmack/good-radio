import React from "react";
import styles from "./Styles.js";
import { Text } from "react-native";
import { Surface } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

export default function Welcome() {
  return (
    <Surface style={styles.welcomeSurface}>
      <LinearGradient
        colors={["rgba(0.8,0.8,0.8,0.2)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 120,
        }}
      />
      <Text style={styles.welcomeText}>
        Good Radio provides a curated selection of (very) good radio stations
        from around the world. {"\n"}
        {"\n"} Select a stream from the stations below.
      </Text>
    </Surface>
  );
}
