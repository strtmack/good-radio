import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  // headerStyle: {
  //   backgroundColor: '#f8f8f2',
  // },
  welcomeSurface: {
    display: 'flex',
    width: '90%',
    height: 150,
    backgroundColor: '#151515',
    borderRadius: 5,
    // alignItems: 'flex-start',
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
  // welcomeHeader: {
  //   fontFamily: 'Archivo_700Bold',
  //   fontSize: 20,
  //   color: '#ffffff',
  //   textAlign: 'left',
  //   marginTop: 20,
  //   marginLeft: 25,
  // },
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
    // alignItems: 'center',
    backgroundColor: '#151515',
    // fontFamily: 'Archivo_700Bold',
  },
  scrollView: {
    width: '100%',
  },
  stationBrowser: {
    display: 'flex',
    // flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // alignContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  browseHeader: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    // marginLeft: 25,
  },
  stationCard: {
    display: 'flex',
    // fontFamily: 'Archivo_700Bold',
    // flex: 1,
    width: '27%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'center',
    justifyContent: 'center',
    margin: 10,
    // elevation: 6,
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: 2,
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
    // fontFamily: 'Archivo_600SemiBold',
    // flexDirection: 'row',
    // backgroundColor: '#fff',
    textAlign: 'center',
    width: 220,
    padding: 0,
    justifyContent: 'center',
    // borderStyle: 'solid',
    // borderColor: 'white',
    // borderWidth: 2,
  },
  stationInfoText: {
    // flexWrap: 'wrap',
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
  // largeText: {
  //   fontSize: 22
  // },
  // smallText: {
  //   fontSize: 16
  // },
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