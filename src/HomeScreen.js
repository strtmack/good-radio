import React from 'react'
import styles from './Styles.js';
import stationList from './stationList'
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, SafeAreaView, ScrollView } from 'react-native';
import { Surface } from 'react-native-paper';
import StationCard from './StationCard'
import Welcome from './Welcome'


export default function HomeScreen({ loadStation, navigation }) {


  return (
    <SafeAreaView style={styles.homeScreen}>
      <ScrollView style={styles.scrollView}>
        {/* <Text style={styles.welcomeHeader}>
          Welcome
        </Text> */}
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

      {/* <Text>Home Screen</Text>
      <Text onPress={() => loadStation('Skylab', 0)} stationTitle={'Skylab'} stationIndex={0} >Skylab Radio</Text>
        <Text onPress={() => loadStation('NTS', 1)} stationTitle={'NTS'} stationIndex={1} >NTS</Text>
      <Button
        mode='outlined'
        title='Go to Details'
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'testing the route params',
          });
        }}
      >
        Press me
      </Button> */}
      </ScrollView>
    </SafeAreaView>
  );
}