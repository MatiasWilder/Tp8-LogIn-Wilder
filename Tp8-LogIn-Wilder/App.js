import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, Button } from 'react-native';


export default function App() {
  return (<>
    <StatusBar style="auto" />
    <SafeAreaView style={{flex: 2, justifyContent: "center", paddingHorizontal: 20, backgroundColor: "#db1c12"}}>
    
    <View style={styles.container}>
      <ImageBackground source={require('./assets/CocaCola.png')} resizeMode="contain" style={styles.image} />
      <TextInput style={styles.input} type="email" placeholder='Ingrese su correo'/>
      <TextInput style={styles.input} type="hidden" placeholder='Ingrese su contraseña'/>
      <Button title='Enviar' style={styles.boton}/>
      <Text style={styles.texto}>Olvidaste la clave?</Text>
      <Text style={styles.texto}>Crear cuenta</Text>
    </View>
  
  </SafeAreaView></>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff"
  },


  texto: {
    margin: 10,
    fontFamily: "sans-serif",
    fontStyle: "bold", 
    fontSize: 14,
    alignItems: 'center',
    color: "#1567eb"
  },

  input:{
    margin: 5,
    height: 40,
    width: 250,
    borderWidth: 1,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: 200,
    height: 200
  },

  boton:{
    margin: 15,
    backgroundColor: "#ffffff",
    textalign:'center'
  }

});
