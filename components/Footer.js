import { View, Text } from 'react-native'
import React from 'react'
import Button from './Button'

const COLORS = {
    goed: "#00eda6",
    fout: "#ff006f",
    antwoord: "#ffbf00"
}

const Footer = () => {
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
      />
      <Button
      name="lightbulb-o"
      size={24}
      color='white'
      iconColor={COLORS.antwoord}
      />
      <Button
      name="thumbs-o-up"
      size={24}
      color='white'
      iconColor={COLORS.goed}
      />
    </View>
  )
}

export default Footer