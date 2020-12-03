import React from 'react';
import styles from './Styles.js';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, SafeAreaView, ScrollView } from 'react-native';
import { Surface } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


export default function Welcome() {

    return(
        <Surface style={styles.welcomeSurface}>
            <LinearGradient
                colors={['rgba(0.4,0.4,0.4,0.8)', 'transparent']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 120,
                }}
                />
            <Text style={styles.welcomeText}>Welcome. {'\n'}{'\n'} Select a stream to dive in and ((( drift )))</Text>
        </Surface>
    )
}