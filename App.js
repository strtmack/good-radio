import React from "react";
import { Text, View, Image, AppRegistry } from "react-native";
import { Audio } from "expo-av";
import styles from "./src/Styles.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import Player from "./src/Player";
import HomeScreen from "./src/HomeScreen";
import stationList from "./src/stationList";
import CustomHeader from "./src/CustomHeader";
import AutoScrolling from "react-native-auto-scrolling";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import {
  Archivo_400Regular,
  Archivo_400Regular_Italic,
  Archivo_500Medium,
  Archivo_500Medium_Italic,
  Archivo_600SemiBold,
  Archivo_600SemiBold_Italic,
  Archivo_700Bold,
  Archivo_700Bold_Italic,
} from "@expo-google-fonts/archivo";
import { useFonts } from "expo-font";

// React Native Paper Theme for Material UI components
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0000e6",
    accent: "#009900",
    background: "#eeeeeb",
    text: "#000000",
  },
};

let customFonts = {
  Archivo_500Medium: Archivo_500Medium,
  Archivo_700Bold: Archivo_700Bold,
  Archivo_600SemiBold: Archivo_600SemiBold,
  Archivo_400Regular: Archivo_400Regular,
};

const Stack = createStackNavigator();

class App extends React.Component {
  state = {
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    isBuffering: false,
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: INTERRUPTION_MODE_IOS_MIX_WITH_OTHERS,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: false,
      });
    } catch (e) {
      console.log(e);
    }

    this._loadFontsAsync();
  }

  async loadAudio(stationIndex) {
    const { currentIndex, isPlaying, volume } = this.state;

    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: stationList[stationIndex].uri,
      };

      const status = {
        shouldPlay: isPlaying,
        volume,
      };

      playbackInstance.setOnPlaybackStatusUpdate(
        this.setOnPlaybackStatusUpdate
      );
      await playbackInstance.loadAsync(source, status, false);
      this.setState({ playbackInstance });
    } catch (e) {
      console.log(e);
    }
  }

  setOnPlaybackStatusUpdate = (status) => {
    this.setState({
      isBuffering: status.isBuffering,
    });
  };

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentIndex < stationList.length - 1
        ? (currentIndex -= 1)
        : (currentIndex = 0);
      this.setState({
        currentIndex,
      });
      this.loadAudio();
    }
  };

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentIndex < stationList.length - 1
        ? (currentIndex += 1)
        : (currentIndex = 0);
      this.setState({
        currentIndex,
      });
      this.loadAudio();
    }
  };

  renderStationImage() {
    const { playbackInstance, currentIndex } = this.state;

    return playbackInstance ? (
      <View>
        <Image
          style={styles.stationImage}
          source={{ uri: stationList[currentIndex].imageSource }}
        />
      </View>
    ) : null;
  }

  renderStationInfo() {
    const { playbackInstance, currentIndex } = this.state;

    return playbackInstance ? (
      <View style={styles.stationInfo}>
        <Text style={styles.stationInfoText}>
          {stationList[currentIndex].title}
        </Text>
        <AutoScrolling style={styles.scrollingTextContainer}>
          <Text style={styles.scrollingText} delay={30} duration={6000}>
            {stationList[currentIndex].info}
          </Text>
        </AutoScrolling>
      </View>
    ) : null;
  }

  loadStation = async (stationTitle, stationIndex) => {
    const { isPlaying, playbackInstance } = this.state;

    isPlaying ? playbackInstance.pauseAsync() : null;

    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      this.setState({
        currentIndex: stationIndex,
      });

      this.loadAudio(stationIndex);
    } else {
      this.setState({
        currentIndex: stationIndex,
      });

      this.loadAudio(stationIndex);
    }
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#282828",
                },
              }}
            >
              <Stack.Screen
                name="good radio"
                options={{
                  headerTitle: (props) => <CustomHeader {...props} />,
                }}
              >
                {(props) => (
                  <HomeScreen {...props} loadStation={this.loadStation} />
                )}
              </Stack.Screen>
              <Stack.Screen name="StationPage">
                {(props) => (
                  <StationScreen {...props} loadStation={this.loadStation} />
                )}
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
            ) : null}
          </NavigationContainer>
        </PaperProvider>
      );
    } else {
      return <AppLoading />;
    }
  }
}

export default App;
AppRegistry.registerComponent(appName, () => App);
