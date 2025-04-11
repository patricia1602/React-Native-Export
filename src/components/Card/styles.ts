
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({

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
})