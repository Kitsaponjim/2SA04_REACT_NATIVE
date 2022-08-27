import React, {useState} from "react";
import { ImageBackground, Text , StyleSheet, View} from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '',
        description: '',
        temp: 0
    })
    return (
        <ImageBackground source={require('../BG.jpg')} style={style.backdrop}>
            <View style={style.highlight}>
                <Text style={style.titleText}>Zip code is {props.zipCode}.</Text>
                <Forecast {...forecastInfo}/>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },

    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width:"100%", 
        height:"45%", 
        paddingTop: Constants.statusBarHeight, 
        alignItems: 'center'
    },

    titleText: {
        fontSize: 32,
        color: '#fff',
        paddingTop: Constants.statusBarHeight, 
        textAlign: 'center'

    }
});