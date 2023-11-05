import { View, Text, TouchableWithoutFeedback, Animated} from 'react-native'
import React, { useCallback , useRef} from 'react'
import { FontAwesome } from  '@expo/vector-icons'

const Button = ({ name, size, color, iconColor, style, onPress}) => {
    const scale = useRef(new Animated.Value(1)).current;

    const animateScale =useCallback(( newValue) =>{

            Animated.spring(scale, {
                toValue:newValue,
                triction: 4,
                useNativeDriver: true
            }).start()
        
    },[scale])

  return (
    <TouchableWithoutFeedback 
        onPressIn={()=>animateScale(0.6)}
        onPressOut={()=>{
        animateScale(1)}}
        delayPressIn={0}
        delayPressOut={100}
        >
        <Animated.View style={{
        height: 50,
        width: 50,
        backgroundColor: iconColor,
        elevation: 5,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBlockColor: iconColor,
        borderWidth: 1.2,
        transform: [{scale}],
        ...style
    }}>
            <FontAwesome name={name} size={size} color={color} iconColor={iconColor} />
        </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default Button