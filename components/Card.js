import { StyleSheet, Text, View, Image, Dimensions, Animated} from 'react-native'
import React, { Fragment, useCallback } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Choice from './Choice';


const {width, height } = Dimensions.get("screen")

const Card = ({ name, image, isFirst, swipe, titlSign, ...rest }) => {
    
    const rotate = Animated.multiply(swipe.x,titlSign).interpolate({
        inputRange: [-100,0,100],
        outputRange: ['8deg', '0deg', '-8deg']
    });
    
    // const isFirst = index == 0;

         // Animated style for the card with rotation and translation
         const animatedCardStyle = {
            transform: [...swipe.getTranslateTransform(), { rotate }]
        }
    
        // Opacity animation for the "goed" button
        const goedOpacity = swipe.x.interpolate({
            inputRange: [25, 100],
            outputRange: [0,1],
            extrapolate: 'clamp'
        });
    
        // Opacity animation for the "fout" button
        const foutOpacity = swipe.x.interpolate({
            inputRange: [-100, -25],
            outputRange: [1,0],
            extrapolate: 'clamp'
        });

    const renderChoice = useCallback(() => {
        return (
            <Fragment>
                <Animated.View
                    style= {[
                        styles.choiceContainer, 
                        styles.goedContainer,
                        { opacity: goedOpacity }
                    ]}>
                    <Choice type="goed"/>
                </Animated.View>
                <Animated.View
                    style= {[
                        styles.choiceContainer, 
                        styles.foutContainer,
                        { opacity: foutOpacity }
                    ]}>
                    <Choice type="fout"/>
                </Animated.View>
            </Fragment>
        )
    }, [goedOpacity, foutOpacity])
    


  return (
    <Animated.View style={[
        styles.container,
        isFirst && animatedCardStyle
        ]} {...rest}>
      <Image source={image} style={styles.image} />
      <LinearGradient
       colors={['transparent','rgba(0,0,0,0)']}
      style={styles.gradient}
      >
        <View style={styles.birdContainer}>
            {/* <Text style={styles.name}>{name}</Text> */}
        </View>
      </LinearGradient>
      {isFirst && renderChoice()}
    </Animated.View>
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