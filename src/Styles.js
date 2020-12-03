import { StyleSheet } from 'react-native';
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

const styles = StyleSheet.create({
  welcomeSurface: {
    display: 'flex',
    width: '90%',
    height: 150,
    backgroundColor: '#151515',
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginBottom: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    elevation: 1,
  },
  welcomeText: {
    fontFamily: 'Archivo_500Medium',
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
  },
  homeScreen: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#151515',
  },
  scrollView: {
    width: '100%',
  },
  stationBrowser: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  browseHeader: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  stationCard: {
    display: 'flex',
    width: '27%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  stationCardImage: {
    width: 90,
    height: 90,
    borderRadius: 5,
  },
  stationCardHeader: {
    fontFamily: 'Archivo_500Medium',
    color: '#ffffff',
    textAlign: 'left',
    paddingTop: 8,
    fontSize: 14,
  },
  stationThumbnail: {
    borderRadius: 5,
  },
  player: {
    fontFamily: 'Archivo_700Bold',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    height: 70,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  playPauseIcon: {
    borderStyle: 'solid',
    borderColor: '#e8e8e8',
    borderWidth: 1,
  },
  stationImage: {
    width: 70,
    height: 70,
  },
  stationInfo: {
    textAlign: 'center',
    width: 220,
    padding: 0,
    justifyContent: 'center',
  },
  stationInfoText: {
    fontFamily: 'Archivo_600SemiBold',
    color: '#ffffff',
    fontSize: 18,
    margin: 'auto',
    textAlign: 'center',
  },
  scrollingTextContainer: {
    width: '100%',
    marginTop: 5,
  },
  scrollingText: {
    fontFamily: 'Archivo_400Regular',
    color: '#ffffff',
    fontSize: 14,
  },
  control: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'flex-start',
    marginRight: 10,
  },
  customHeader: {
    display: 'flex',
  },
  customHeaderText: {
    display: 'flex',
    color: '#ffffff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    textAlign: 'center',
    },
});

export default styles;