import { StyleSheet, Text, View, Image, Dimensions} from 'react-native'
import React, { Fragment } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Choice from './Choice';


const {width, height } = Dimensions.get("screen")

const Card = ({ name, image, isFirst }) => {
    // const isFirst = index == 0;

    const renderChoice = () => {
        return (
            <Fragment>
                <View
                    style= {[styles.choiceContainer, styles.goedContainer]}
                >
                    <Choice type="goed"/>
                </View>
                <View
                    style= {[styles.choiceContainer, styles.foutContainer]}
                >
                    <Choice type="fout"/>
                </View>
            </Fragment>
        )
    }
    


  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <LinearGradient
       colors={['transparent','rgba(0,0,0,0.6)']}
      style={styles.gradient}
      >
        <View style={styles.birdContainer}>
            <Text style={styles.name}>{name}</Text>
        </View>
      </LinearGradient>
      {isFirst && renderChoice()}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 25
    },
    image:{
        width: width * 0.9,
        height: height* 0.65,
        borderRadius: 20
    },
    gradient:{
        position: 'absolute',
        bottom:0,
        left: 0,
        right: 0,
        height: 600
    },
    name: {
        fontSize: 30,
        color: "white",
        fontWeight: '400'
    },
    birdContainer:{

    },
    choiceContainer: {
        position: 'absolute',
        top:100
    },
    goedContainer: {
        left: 45,
        transform: [{ rotate: '-30deg'}]
    },
    foutContainer: {
        right: 45,
        transform: [{ rotate: '30deg'}]
    }
})