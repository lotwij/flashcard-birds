import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Home Screen</Text>
          <TouchableOpacity style={styles.buttonContainer}
            onPress={() => navigation.navigate('Details')}>
            <Text style={styles.buttonText}>Ga naar extra scherm</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Flipcard')}>
            <Text style={styles.buttonText}>Start leren vogels</Text>
          </TouchableOpacity>

        </View>
      );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ebebeb'
        },
        text: {
          color: '#333',
          fontSize: 24,
          fontWeight: 'bold'
        },
        buttonContainer: {
          backgroundColor: '#222',
          borderRadius: 5,
          padding: 10,
          margin: 20
        },
        buttonText: {
          fontSize: 20,
          color: '#fff'
        }
      });