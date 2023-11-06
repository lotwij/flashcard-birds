import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Animated, PanResponder, Dimensions} from 'react-native';
import { birds as birdsArray } from '../../data/data'
import Card from '../../components/Card';
import Footer from '../../components/Footer';

const {width, height } = Dimensions.get("screen")

export default function Details() {
  const [birds, setBirds] = useState(birdsArray);

  // Swipe effect
  const swipe = useRef(new Animated.ValueXY()).current;
  const titlsign = useRef( new Animated.Value(1)).current;

  // panresponder config
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderMove: (_, {dx, dy, y0}) =>{
      swipe.setValue({x:dx, y:dy});
      titlsign.setValue(y0 > (height *0.9)/2 ? 1: -1)
    },
    onPanResponderRelease: (_, {dx, dy}) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dx) > 100;

      if(isActionActive){
        // swiping off screen
        Animated.timing(swipe, {
          duration: 100,
          toValue: {
            x: direction * 500,
            y: dy
          },
          useNativeDriver: true
        }).start(removeTopCard);
      }else{
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0
          },
          useNativeDriver: true,
          friction: 5
        }).start()
      }
    }
  })

  const removeTopCard = useCallback(()=>{
    setBirds((prevState)=>prevState.slice(1));
    swipe.setValue({x:0, y:0});
  }, [swipe])

  useEffect(()=>{
    if(!birds.length){
      setBirds(birds)
    }
  }, [birds.length])

    // handle user choice (left or right swipe)
    const handleChoice = useCallback((direction)=>{
      Animated.timing(swipe.x, {
        toValue: direction  * 500,
        duration: 400,
        useNativeDriver: true
      }).start(removeTopCard);
  
    },[removeTopCard,swipe.x]);


  return (
    <View style={styles.container}>
      < StatusBar hidden={true} />
      {
        birds.map(({name, image},index)=>{
          const isFirst = index == 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};
          return(
            <Card 
              key={name}
              name = {name}
              image = {image}
              isFirst = {isFirst}
              swipe = {swipe}
              titlSign = {titlsign}
              {...dragHandlers}
              />
          )
        }).reverse()
      }
      <Footer  handleChoice={handleChoice}/>
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