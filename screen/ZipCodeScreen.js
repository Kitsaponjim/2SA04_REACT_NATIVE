import React from "react";
 import { FlatList, TouchableHighlight } from "react-native";
 import { StatusBar, View, Text, StyleSheet, ImageBackground } from "react-native";
 import { useNavigation } from "@react-navigation/native";


 const availableZipItems = [
     { place: 'หาดใหญ่', code: '90110' },
     { place: 'ตรัง', code: '92000' },
     { place: 'เชียงใหม่', code: '50000' },
     { place: 'ขอนแก่น', code: '40000' },
     { place: 'ชลบุรี', code: '20000' },
     { place: 'นครศรีธรรมราช', code: '80000' },
     { place: 'นครพนม', code: '48000' },
     { place: 'พระนครศรีอยุธยา', code: '13000' },
     { place: 'เชียงคาน', code: '42110' },
     { place: 'สุราษฎร์ธานี', code: '84000' },
    ]

 const ZipItem = ({place, code, navigation}) => (
     <TouchableHighlight onPress={() => {
         navigation.navigate("Weather", {zipCode: code})
     }}>
         <View style= {style.zipItem}>
          <Text style= {style.zipPlace}>{place}</Text>
          <Text style= {style.zipCode}>{code}</Text>
         </View>
     </TouchableHighlight>

 )

 const _keyExtractor = item => item.code

 export default function ZipCodeScreen() {
     const navigation = useNavigation()
     return (
        <ImageBackground source={require('../BG2.jpg')}>
         <View>
             <FlatList
             data = {availableZipItems}
             key = {_keyExtractor}
             renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
             />
         <StatusBar styte="auto" />
         </View>  
        </ImageBackground>
     )
 }

 const style = StyleSheet.create(
     {
       zipItem: {
         flex: 3,
         flexDirection: 'row',
         justifyContent: 'space-evenly',
        
       },
       
       Place: {
        flex: 2,
        fontSize: 32,
        fontWeight: "bold",
        color: 'black',
        textAlign: 'right'
      },

      Code: {
        flex: 2,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: "bold",
        color: 'black',
      },
      
    }
  ) 