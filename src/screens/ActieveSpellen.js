import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Animated } from 'react-native';
import { birds as birdsArray } from '../../data/data'
import Card from '../../components/Card';
import Footer from '../../components/Footer';

export default function Details() {
  const [birds, setBirds] = useState(birdsArray);

  // Swipe effect
  const swipe = useRef(new Animated.ValueXY()).current;
  const titlsign = useRef( new Animated.Value(1)).current;

  

  useEffect(()=>{
    if(!birds.length){
      setBirds(birds)
    }
  }, [birds.length])


  return (
    <View style={styles.container}>
      < StatusBar hidden={true} />
      {
        birds.map(({name, image},index)=>{
          const isFirst = index == 0;
          return(
            <Card 
              key={name}
              name = {name}
              image = {image}
              isFirst = {isFirst}
              />
          )
        }).reverse()
      }
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fffff'
  },
  text: {
    color: '#333',
    fontSize: 24,
    fontWeight: 'bold'
  }
});