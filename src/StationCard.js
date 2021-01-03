import React, { useState } from "react";
import styles from "./Styles.js";
import { Image, Text, Pressable, View } from "react-native";

export default function StationCard({
  title,
  image,
  info,
  stationIndex,
  loadStation,
  navigation,
}) {
  return (
    <Pressable
      style={styles.stationCard}
      onPress={() => {
        loadStation(title, stationIndex);
      }}
    >
      <Image style={styles.stationCardImage} source={{ uri: image }} />
      <View style={styles.stationCardTextView}>
        <Text style={styles.stationCardHeader}>{title}</Text>
        <Text style={styles.stationCardInfo}>{info}</Text>
      </View>
      {/* <IconButton icon='play' onPress={() => loadStation(title, stationIndex)}/> */}
    </Pressable>
  );
}
