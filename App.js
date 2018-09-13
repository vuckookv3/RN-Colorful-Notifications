import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      notifications: [
        { message: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
        { message: 'aaa' },
        { message: 'aaa' },
        { message: 'aaa' },
        { message: 'aaa' },
        { message: 'aaa' },
        { message: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
        { message: 'aaa' },
        { message: 'aaa' },
        { message: 'aaa' },
        { message: 'aaa' },
        { message: 'aaa' },
      ]
    }
  }


  async componentDidMount() {
    console.log('DID')
  }

  async componentDidUpdate() {
    console.log('UPDATE')
  }

  renderOneNotification = (e, i) => {
    const randomColor = this.randomColorPicker();
    return (
      <View key={i} style={{
        width: '70%',
        backgroundColor: randomColor,
        borderColor: 'black',
        borderWidth: 3,
        padding: '10%',
        marginBottom: '10%'
      }}>
        <Text>{e.message}</Text>
      </View>
    )
  }

  randomColorPicker = () => {

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // const r = Math.floor(Math.random() * 256);
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    // return "rgb(" + r + ", " + g + ", " + b + ")";

    var h = randomInt(0, 360);
    var s = randomInt(42, 98);
    var l = randomInt(40, 90);
    return `hsl(${h},${s}%,${l}%)`;
  }

  refresh() {
    this.forceUpdate()
  }


  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.randomColorPicker() }]}>
        <View style={{ backgroundColor: 'yellow', padding: '2%', marginBottom: '3%' }}>
          <TouchableOpacity onPress={() => this.refresh()}>
            <View>
              <Text>REFRESH</Text>
            </View>
          </TouchableOpacity>
        </View>


        <ScrollView>
          <View style={styles.holder}>
            {this.state.notifications.map((e, i) => this.renderOneNotification(e, i))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  holder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  one: {

  }
});
