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
          // When the button is pressed down, animate the scale to 0.6
          onPressIn={()=>animateScale(0.6)}  
          // Delay before the onPressIn event is triggered
          delayPressIn={0} 
          // When the button is released, animate the scale back to 1
          onPressOut={()=>{ 
            animateScale(1),
            // Call the onPress prop, which should be a function provided by the parent component
            onPress() 
          }}
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