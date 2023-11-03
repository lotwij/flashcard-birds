import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { Card, Title } from 'react-native-paper';

type Props = {
    title:string
}


const FlipCard: React.FC <Props> = ( {title}, {plaatje} ) => {
    return (
    <Card style={styles.card}>
        <TouchableOpacity>
          <View style={styles.container}>
        <Card.Content>
            
            <Title style={styles.title}> {title} </Title>
            <View style={{ flex:1, width: '100%' , borderRadius : 15}} >
            <Image style={styles.Image} source={require("../data/franjepoot.jpg")} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {title}
              </Text>
            </View>
            </View>
            <TextInput/>
        </Card.Content>
        </View>
        </TouchableOpacity>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        height: 470,
        backgroundColor : 'white', 
        // justifyContent : 'center', 
        padding: 0,
        marginBottom:10,
    },
    container : {
        width : '100%',
        height : 400,
        // marginBottom : 25,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',
        overflow : 'hidden'
      },
    Image: {
        width: '100%',
        height: 400,
        borderRadius : 5,
        marginTop:0
    },
    textContainer : {
        padding: 2,
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
      },

    title: {
        fontWeight : 'bold',
        fontSize : 20,
        justifyContent : 'center',
        paddingTop:0,
        marginBottom: 10,
        marginTop:15,
        marginBottom: 15

        // height:'30%'
    }
})

export default FlipCard;