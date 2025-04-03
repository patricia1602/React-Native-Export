import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
//import Icon from "./assets/icon.png";
const Icon = require("./assets/icon.png");

export default function App() {
  const [nome, setnome] = useState("");

 
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Título</Text>
        <Text>Descrição, esse app é muito bom!</Text>
        <Image source={Icon} style={{ width: 100, height: 100, marginTop: 10 }} />
        <Button title="Ok" onPress={() => Alert.alert("Olá mundo!")} />
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Seu nome é: " + nome)}
        >
          <Text>OK2</Text>
        </TouchableOpacity>

        <Text>Digite o seu nome:</Text>
        <TextInput
          value={nome}
          style={styles.input}
          onChangeText={(text) => setnome(text)} // Correção aqui
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  box1: {
    width: "100%",
    height: 200,
    backgroundColor: "#dedede",
    padding: 10,
  },
  box2: {
    width: "100%",
    height: 200,
    backgroundColor: "red", // Correção na cor
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "gray",
    marginTop: 10,
    borderRadius: 4,
  },
});
