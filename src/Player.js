import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av';
import { IconButton, ActivityIndicator } from 'react-native-paper';
import styles from './Styles.js';
import { 
  OpenSans_300Light,
  OpenSans_300Light_Italic,
  OpenSans_400Regular,
  OpenSans_400Regular_Italic,
  OpenSans_600SemiBold,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold,
  OpenSans_800ExtraBold_Italic 
} from '@expo-google-fonts/open-sans';
import { useFonts } from 'expo-font';


export default function Player(props) {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });

  let loadWheelColors = [
    '#F5B232',
    '#54BF74',
    '#F7781F',
    '#35CBE2',
    '#D8CFC3',
    '#B34ADA',
    '#B34ADA',
  ]

  let randomColor = loadWheelColors[Math.floor(Math.random()*loadWheelColors.length)];


  return (
    <View style={styles.player}>
      {/* <Image
        style={styles.stationImage}
        source={{ uri: 'https://cdn-profiles.tunein.com/s150238/images/logog.jpg?t=159537' }}
      /> */}
      <View>
        {props.renderStationImage()}
      </View>
      <View>
        {props.renderStationInfo()}
      </View>

      {!props.isBuffering ? (
        <TouchableOpacity style={styles.control} >
          <ActivityIndicator animating={true} color={randomColor} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.control} onPress={props.handlePlayPause}>
        {props.isPlaying ? (
          <IconButton icon='pause' color='#ffffff' style={styles.playPauseIcon} />
        ) : (
          <IconButton icon='play' color='#ffffff' style={styles.playPauseIcon} />
        )}
      </TouchableOpacity> 
      )}
              

    </View>
    );
}

