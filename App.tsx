import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [ciudad, setCiudad] = useState("")
  const [temperatura, setTemperatura] = useState(0)

  function mansaje(){
    Alert.alert("Temperatura", "La temperatura en " + ciudad + " es de " + temperatura)
  }

  return (
    <ImageBackground style={styles.container} source={{uri: "https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/128c95a2-f303-434d-8c9f-1237c027b199/Pok%C3%A9mon+Emerald+-+waterfall"}}>
      <Text style={{color:"white", fontSize: 30}}>CLIMA</Text>
      <TextInput 
      placeholder='Ingrese una ciudad'
      placeholderTextColor={"white"}
      style={styles.input}
      onChangeText={(texto) => setCiudad(texto)}
      />
      <TextInput
      placeholder='Ingrese una Temperatura' 
      placeholderTextColor={"white"}
      style={styles.input}
      keyboardType='numeric'
      onChangeText={(texto) => setTemperatura(+texto)}
      />

      <Button title="enviar" onPress={() => mansaje()}/>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91DDCF',
    alignItems: 'center',
    justifyContent: 'center',
    color: "white"
  },
  input:{
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    textAlign: "center",
    fontSize: 20,
    color: "white"  
  },
});
