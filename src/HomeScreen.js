import React from 'react'
import styles from './Styles.js';
import stationList from './stationList'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import StationCard from './StationCard'
import Welcome from './Welcome'


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