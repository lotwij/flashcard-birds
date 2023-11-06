// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import MainStackNavigator from './src/components/MainStackNavigator'

// export default function App() {
//   return (
//     <MainStackNavigator />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react'
import { Text, View, StatusBar } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StackNavigator } from 'react-navigation'

import { styles } from './utils/styles'
import DeckMain from './components/DeckMain'
import DeckEdit from './components/DeckEdit'
import DeckDetail from './components/DeckDetail'
import CardEdit from './components/CardEdit'
import CardQuiz from './components/CardQuiz'
import Result from './components/Result'
import { setLocalNotification } from './utils/notification'

import reducer from './reducers'

// Disable warning met test
console.disableYellowBox = true

const Navigator = StackNavigator({
  DeckMain: {
    screen: DeckMain,
    navigationOptions: {
      header: null,
    },
  },
  DeckEdit: {
    screen: DeckEdit,
    navigationOptions: {
      header: null,
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      header: null,
    },
  },
  CardEdit: {
    screen: CardEdit,
    navigationOptions: {
      header: null,
    },
  },
  CardQuiz: {
    screen: CardQuiz,
    navigationOptions: {
      header: null,
    },
  },
  Result: {
    screen: Result,
    navigationOptions: {
      header: null,
    },
  },
})

export default class App extends Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.viewPort}>
          <View style={styles.statusBar}>
            <StatusBar />
          </View>
          <Navigator />
        </View>
      </Provider>
    )
  }
}
