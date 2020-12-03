import React, { useState } from 'react';
import styles from './Styles.js';
import { Image, View, Text, TouchableOpacity, TouchableHighlight, Pressable, Button, Modal } from 'react-native'
import { Avatar, IconButton, Card, Title, Paragraph } from 'react-native-paper';
import { 
  Archivo_400Regular,
  Archivo_400Regular_Italic,
  Archivo_500Medium,
  Archivo_500Medium_Italic,
  Archivo_600SemiBold,
  Archivo_600SemiBold_Italic,
  Archivo_700Bold,
  Archivo_700Bold_Italic 
} from '@expo-google-fonts/archivo'
import { useFonts } from 'expo-font';



export default function StationCard({ title, image, stationIndex, loadStation, navigation }) {

    // const [modalVisible, setModalVisible] = useState(false);

    let [fontsLoaded] = useFonts({
        Archivo_400Regular_Italic,
        Archivo_500Medium,
        Archivo_600SemiBold,
        Archivo_700Bold,
    });

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
