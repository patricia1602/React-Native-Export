import { useState } from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

const ArrayUser = [
  {
    nome: "Patrícia",
    funcao: "Programador",
  },
  {
    nome: "Leonardo",
    funcao: "Barbeiro",
  },
  {
    nome: "Manuela",
    funcao: "Cabeleilera",
  },
  {
    nome: "Maria",
    funcao: "Administradora",
  },

  {
    nome: "Marcelo",
    funcao: "Motorista",
  },
  {
    nome: "Patrícia",
    funcao: "Programador",
  },
  {
    nome: "Leonardo",
    funcao: "Barbeiro",
  },
  {
    nome: "Manuela",
    funcao: "Cabeleilera",
  },
  {
    nome: "Maria",
    funcao: "Administradora",
  },
  {
    nome: "Marcelo",
    funcao: "Motorista",
  },
];

export default function App() {
  const _renderCard = () => {
    if (ArrayUser.length == 0) {
      return <></>;
    }

    const vet: any = [];

    // Renderizando uma lista
    ArrayUser.map((item, index) => {
      vet.push(
        <View style={styles.card} key={index}>
          <View style={styles.boxImg}>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
              source={{ uri: `https://robohash.org/${index}.png` }}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.title}>Nome: </Text>
            <Text style={styles.desc}>{item.nome}</Text>
            <Text style={styles.title}>Função: </Text>
            <Text style={styles.desc}>{item.funcao}</Text>
          </View>
        </View>
      );
    });

    //for (let i = 0; i < ArrayUser.length; i++) {
    //vet.push(
    //<View style={styles.card} key={i}>
    //</View><View style={styles.boxImg}>
    ///<Image
    //resizeMode="cover"
    //style={{ width: "100%", height: "100%" }}
    //source={{ uri: `https://robohash.org/${i}.png` }}
    ///>
    //</View>
    //<View style={styles.box}>
    //<Text style={styles.title}>Nome: </Text>
    //<Text style={styles.desc}>{ArrayUser[i].nome}</Text>
    //<Text style={styles.title}>Função: </Text>
    //<Text style={styles.desc}>{ArrayUser[i].funcao}</Text>
    //</View>
    //</View>
    //);
    //}

    return vet;
  };

  return (
    <View style={styles.container}>
      {/*<ScrolView>
    _renderCard()
    </ScrolView>*/}
      
      <FlatList
        data={ArrayUser}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.card}>
              <View style={styles.boxImg}>
                <Image
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: `https://robohash.org/${index}.png` }}
                />
              </View>
              <View style={styles.box}>
                <Text style={styles.title}>Nome: </Text>
                <Text style={styles.desc}>{item.nome}</Text>
                <Text style={styles.title}>Função: </Text>
                <Text style={styles.desc}>{item.funcao}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dedede",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 40,
  },
  card: {
    width: "100%",
    height: 140,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    marginTop: 10,
  },
  box: {
    //borderWidth: 1,
    width: "70%",
    height: "100%",
    shadowColor: "#ffff",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16,

    elevation: 24,
  },
  boxImg: {
    width: "30%",
    height: "100%",
    //borderWidth: 1,
  },
  title: {
    color: "gray",
  },
  desc: {
    fontFamily: "bold",
  },
});
