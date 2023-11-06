import React, {useRef, useState} from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Animated} from 'react-native'
import FlipCard from '../../components/FlipCard'
import Button from '../components/Button';


export default function FlashCard({}) {
    const animate = useRef(new Animated.Value(0));
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        Animated.timing(animate.current, {
            duration: 300,
            toValue: isFlipped ? 0 : 180,
            useNativeDriver: true,
        }).start(() => {
            setIsFlipped(!isFlipped)
        }
        );
    }

    const interpolateFront = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    });

    const interpolateBack = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg']
    });

    return (
        <KeyboardAvoidingView behavior = "padding" style={styles.container} >
            <View>
                <Animated.View style={[{ transform: [{rotateY: interpolateFront}]}, styles.hidden]}>
                    <FlipCard title='Welke vogel is dit?'/>
                </Animated.View>

                <Animated.View style={[
                    styles.back, 
                    styles.hidden,
                    {transform:[{rotateY: interpolateBack}]}
                    ]}>
                    <FlipCard title='Antwoord:'/>
                </Animated.View>
                <Button onPress={handleFlip}
                text='Antwoord'></Button>
            </View>
            
        </KeyboardAvoidingView>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    hidden: {
        backfaceVisibility: 'hidden',
    },
    back: {
        position: 'absolute',
        top: 0,
    },
    button: {

    }
});

