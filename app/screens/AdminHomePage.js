import React from "react";
import { View,Image, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

function AdminHomePage(props) {
const { onPress, title = 'Save' } = props;
const navigation = useNavigation()
  return (
    <View style={styles.screenContainer}>
      <View>
        <Image
          style={styles.bigLogoStyle} 
          source={require('../assets/AbuJobsBigLogo.jpeg')} />
      </View>
        <TouchableOpacity style={styles.button1} onPress={onPress}>
            <Text style={styles.text}>Users</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate("BusinessOptions")}>
            <Text style={styles.text}>Businesses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate("RequestsList")}>
            <Text style={styles.text}>Requests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={onPress}>
            <Text style={styles.text}>Reports</Text>
        </TouchableOpacity>
    </View>
  );
};
//#68A19B
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    // padding: 16,
    marginBottom: '40%',
    marginTop: '20%',
    color: 'white',
  },
  bigLogoStyle:{
    resizeMode:'contain',
    width:300,
    height: 150,
    padding : 50,
    //paddingTop:50,
    justifyContent: 'space-evenly',
    //alignItems: 'flex-end',
  },

  button2: {
   backgroundColor:"#2885A6",
   width: '70%',
   justifyContent:'center',
   height:60,
   alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  button1: {
   backgroundColor:"#A8D173",
   width: '70%',
   justifyContent:'center',
   height:60,
   alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  text:{
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    justifyContent: 'center',
    alignItems:'center',
  },
});

export default AdminHomePage;