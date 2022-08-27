import React, {useState, useEffect} from "react";
import { ImageBackground, Text , StyleSheet, View} from "react-native";
import Forecast from "./Forecast";
import Constants from 'expo-constants'

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`);
        if (props.zipCode) {
          fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=90110,th&units=metric&APPID=57c578dc612a8dcd9512aca71c107a6c`
          )
            .then((response) => response.json())
            .then((json) => {
              setForecastInfo({
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp,
              });
            })
            .catch((error) => {
              console.warn(error);
            });
        }
      }, [props.zipCode]);
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
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