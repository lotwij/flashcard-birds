import { View, Text } from 'react-native'
import React from 'react'
import Button from './Button'

const COLORS = {
    goed: "#52BC91",
    fout: "#F39675",
    antwoord: "#F5F5F5"
}

const Footer  = ({ handleChoice }) => {
  return (
    <View style={{
        position: 'absolute',
        bottom: 15,
        width: 240,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: -999
    }}>
      <Button
      name="thumbs-o-down"
      size={24}
      color='white'
      iconColor={COLORS.fout}
      onPress={() => handleChoice(-1)}
      />
      <Button
      name="lightbulb-o"
      size={24}
      color='black'
      iconColor={COLORS.antwoord}
      />
      <Button
      name="thumbs-o-up"
      size={24}
      color='white'
      iconColor={COLORS.goed}
      onPress={() => handleChoice(1)}
      />
    </View>
  )
}

export default Footer