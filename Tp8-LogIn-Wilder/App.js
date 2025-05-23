import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function App() {
  return (
    <StatusBar style="light" />
    <SafeAreaView style={{flex: 4, justifyContent: "center", paddingHorizontal: 20}}>
    
    <View style={styles.container}>

      <Text style={tema ? styles.texto}>Olvidaste la clave?</Text>
      <Text style={tema ? styles.texto }>Crear cuenta</Text>
    </View>
  
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {fontFamily: "sans-serif", fontStyle: "bold", fontSize: 10},

});

