import {Text, View, Image} from 'react-native' 

import { styles } from './styles'

type Prop = {
    item: {
        nome:string,
        funcao:string
    },
    index?: number
}

export default function Card({item, index}:Prop){
    return(
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
            <Text style={styles.desc}>{item?.nome}</Text>
            <Text style={styles.title}>Função: </Text>
            <Text style={styles.desc}>{item?.funcao}</Text>
          </View>
        </View>

    )
}