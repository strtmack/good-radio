import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, AppRegistry } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import styles from './src/Styles.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { name as appName } from './app.json';
import Player from './src/Player';
import StationCard from './src/StationCard';
import HomeScreen from './src/HomeScreen';
import stationList from './src/stationList';
import StationPage from './src/StationPage';
import CustomHeader from './src/CustomHeader';
import AutoScrolling from 'react-native-auto-scrolling';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
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


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0000e6',
    accent: '#009900',
    background: '#eeeeeb',
    text: '#000000'
  },
};

let customFonts = {
  'Archivo_500Medium': Archivo_500Medium,
  'Archivo_700Bold': Archivo_700Bold,
  'Archivo_600SemiBold': Archivo_600SemiBold,
  'Archivo_400Regular': Archivo_400Regular,
};

// function HomeScreen({ loadStation, navigation }) {

//   return (
//     <View style={styles.homeScreen}>
//       <View style={styles.stationBrowser}>
//         {stationList.map((station, index) =>
//           <StationCard 
//             title={stationList[index].title} 
//             image={stationList[index].imageSource}
//             stationIndex={stationList[index]}
            
//           />
//         )}
//       </View>
//       <Text>Home Screen</Text>
//       <Text onPress={() => loadStation('Skylab', 0)} stationTitle={'Skylab'} stationIndex={0} >Skylab Radio</Text>
//         <Text onPress={() => loadStation('NTS', 1)} stationTitle={'NTS'} stationIndex={1} >NTS</Text>
//       <Button
//         mode='outlined'
//         title='Go to Details'
//         onPress={() => {
//           navigation.navigate('Details', {
//             itemId: 86,
//             otherParam: 'testing the route params',
//           });
//         }}
//       >
//         Press me
//       </Button>
//     </View>
//   );
// }

function DetailsScreen({ route, navigation }) {
  // get the params
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title='Go to Details...again'
        onPress={() => 
          navigation.push('Details', {
          itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go back' onPress={() => navigation.goBack()} />
      <Button
        title='Go back to first screen in stack'
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

// const stationList = [
//   {
//     title: 'Skylab Radio',
//     uri:
//       'https://secure-stream.skylab-radio.com/live',
//     imageSource: 'https://skylab-radio.com/images/3991625fa749fb45e49a04285c716012.png'
//   },
//   {
//     title: 'NTS Radio 1',
//     uri:
//       'http://stream-relay-geo.ntslive.net/stream',
//     imageSource: 'https://cdn-profiles.tunein.com/s150238/images/logog.jpg?t=159537',
//   },
// ]



class App extends React.Component {
  

  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false,
    fontsLoaded: false,
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: false
      })

      // this.loadAudio()
    } catch (e) {
      console.log(e)
    }

    this._loadFontsAsync();

  }

  async loadAudio(stationIndex) {
    const {currentIndex, isPlaying, volume} = this.state

    try {
      const playbackInstance = new Audio.Sound()
      const source = {
        uri: stationList[stationIndex].uri
      }

      const status = {
        shouldPlay: isPlaying,
        volume
      }

      playbackInstance.setOnPlaybackStatusUpdate(this.setOnPlaybackStatusUpdate)
      await playbackInstance.loadAsync(source, status, false)
      this.setState({playbackInstance})
    } catch (e) {
      console.log(e)
    }
  }

  setOnPlaybackStatusUpdate = status => {
    this.setState({
      isBuffering: status.isBuffering
    })
  }

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state
    isPlaying ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync()

    this.setState({
      isPlaying: !isPlaying
    })
  }

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < stationList.length - 1 ? (currentIndex -= 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state
    if (playbackInstance) {
      await playbackInstance.unloadAsync()
      currentIndex < stationList.length - 1 ? (currentIndex += 1) : (currentIndex = 0)
      this.setState({
        currentIndex
      })
      this.loadAudio()
    }
  }

  renderStationImage() {
    const { playbackInstance, currentIndex } = this.state

    return playbackInstance ? (
      <View>
        <Image
          style={styles.stationImage}
          source={{uri: stationList[currentIndex].imageSource}}
        />
      </View>
    ) : null
  }

  renderStationInfo() {
    const { playbackInstance, currentIndex } = this.state

    return playbackInstance ? (
      <View style={styles.stationInfo}>
        <Text style={styles.stationInfoText}>
          {stationList[currentIndex].title}
        </Text>
        <AutoScrolling style={styles.scrollingTextContainer}>
          <Text
            style={styles.scrollingText}
            delay={30}
            duration={6000}
          >
            {stationList[currentIndex].info}
          </Text>
        </AutoScrolling>
      </View>
    ) : null
  }

  loadStation = async (stationTitle, stationIndex) => {
    const { isPlaying, playbackInstance } = this.state

    isPlaying ? playbackInstance.pauseAsync(): null;


    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      this.setState({
          currentIndex: stationIndex
        })
  
      this.loadAudio(stationIndex);
    } else {
      this.setState({
          currentIndex: stationIndex
        })
  
      this.loadAudio(stationIndex);
    }
  }


  render() {
    if (this.state.fontsLoaded) {
      return (
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName='Home'
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#151515',
                },
              }}
            >
              <Stack.Screen 
                name='nice.radio'
                options={{ headerTitle: props => <CustomHeader {...props} /> }} >
                  {props => <HomeScreen {...props} loadStation={this.loadStation}/>}
              </Stack.Screen>
              <Stack.Screen name='Details' component={DetailsScreen} />
              <Stack.Screen name='StationPage'>
                {props => <StationScreen {...props} loadStation={this.loadStation} />}
              </Stack.Screen>
            </Stack.Navigator>
            {this.state.playbackInstance ? (
              <Player 
                loadStation={this.loadStation} 
                handlePreviousTrack={this.handlePreviousTrack}
                handleNextTrack={this.handleNextTrack}
                handlePlayPause={this.handlePlayPause}
                renderStationInfo={() => this.renderStationInfo()}
                renderStationImage={() => this.renderStationImage()}
                isPlaying={this.state.isPlaying}
                playbackInstance={this.state.playbackInstance}
                currentIndex={this.state.currentIndex}
                volume={this.state.volume}
                isBuffering={this.state.isBuffering}
              />
            ): null }
          </NavigationContainer>
        </PaperProvider>
      );
    } else {
      return <AppLoading
                // startAsync={this._loadFontsAsync}
                // onFinish={() => this.setState({ fontsLoaded: true })}
                // onError={console.warn} 
              />;
    }
  }
  
}

export default App;
AppRegistry.registerComponent(appName, () => App);