import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { ArrayUser } from "./src/global/constantes";
import Card from "./src/components/Card";

export default function App() {
  const _renderCard = () => {
    if (ArrayUser.length == 0) {
      return <></>;
    }

    const vet: any = [];

    // Renderizando uma lista
    ArrayUser.map((item, index) => {
      vet.push(<Card item={item} index={index} />);
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
    {_renderCard()}
    </ScrolView>*/}

      <FlatList
        data={ArrayUser}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <Card item={item} index={index}/>
          )
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
});
