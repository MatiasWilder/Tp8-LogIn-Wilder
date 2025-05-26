import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, Button } from 'react-native';


export default function App() {
  return (<>
    <StatusBar style="auto" />
    <SafeAreaView style={{flex: 1, justifyContent: "center", paddingHorizontal: 20}}>
    
    <View style={styles.container}>
      <ImageBackground source={require('./assets/CocaCola.png')} resizeMode="cover" style={styles.image} />
      <TextInput style={styles.input}  placeholder='Ingrese su correo'/>
      <TextInput style={styles.input}  placeholder='Ingrese su contraseña'/>
      <Button title='Enviar' style={styles.boton}/>
      <Text style={styles.texto}>¿Olvidaste la clave?</Text>
      <Text style={styles.texto}>Crear cuenta</Text>
    </View>
  
  </SafeAreaView></>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontFamily: "sans-serif",
    fontStyle: "bold", 
    fontSize: 10,
    alignItems: 'center'
  },

  input:{
    height: 40,
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
    width: 100,
    height: 60
  },

  boton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  }

});
