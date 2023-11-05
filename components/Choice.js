import { View, Text } from "react-native";
import React from "react";

const COLORS = {
    goed: '#00eda6',
    fout: '#ff006f'
}

const Choice = ({ type })=>{

    const color= COLORS[type];
    return (
        <View style={{
            borderWidth: 5,
            paddingHorizontal: 15,
            borderRadius: 10,
            backgroundColor: 'rgba(0,0,0,0.2)',
            borderColor: color
        }}>
            <Text style={{
                fontSize: 35,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: 4,
                color: color
            }}>{type}</Text>
        </View>
    )
}

export default Choice