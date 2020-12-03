import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IconButton, ActivityIndicator } from 'react-native-paper';
import styles from './Styles.js';


export default function Player(props) {

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

