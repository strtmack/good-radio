import React, { useState } from 'react';
import styles from './Styles.js';
import { Image, Text, Pressable } from 'react-native'



export default function StationCard({ title, image, stationIndex, loadStation, navigation }) {

    return (
        <Pressable 
            style={styles.stationCard}
            onPress={() => {
            loadStation(title, stationIndex)
            }
        }>
            <Image style={styles.stationCardImage} source={{uri: image}}/>
            {/* <IconButton icon='play' onPress={() => loadStation(title, stationIndex)}/> */}
            <Text style={styles.stationCardHeader}>
            {title}
            </Text>
        </Pressable>

    )

}
