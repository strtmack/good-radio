import React from 'react'
import styles from './Styles.js';
import stationList from './stationList'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import StationCard from './StationCard'
import Welcome from './Welcome'
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

let customFonts = {
  'Archivo_500Medium': Archivo_500Medium,
  'Archivo_700Bold': Archivo_700Bold,
  'Archivo_600SemiBold': Archivo_600SemiBold,
  'Archivo_400Regular': Archivo_400Regular,
};


export default function HomeScreen({ loadStation, navigation }) {

  return (
    <SafeAreaView style={styles.homeScreen}>
      <ScrollView style={styles.scrollView}>
        <Welcome />
        <Text style={styles.browseHeader}>
          Browse Stations
        </Text>
      <View style={styles.stationBrowser}>
        {stationList.map((station, index) =>
          <StationCard 
            title={stationList[index].title} 
            image={stationList[index].imageSource}
            stationIndex={index}
            loadStation={loadStation}
            key={index}
          />
        )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}