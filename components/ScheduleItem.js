import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export class ScheduleItem extends Component {
  _onPressButton(){
    console.log('yay')
  }

  render() {
    return (
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.buttonContainer}>
              <View style={styles.timeContainer}>
                <View style={styles.timeItem}>
                    <Text style={styles.sheludeText}>otpravlenie</Text>
                    <Text style={styles.timeText}>12:30</Text>
                  </View>
                  <View style={styles.timeItem}>
                    <Text style={styles.sheludeText}>pribitie</Text>
                    <Text style={styles.timeText}>14:30</Text>
                  </View>    
              </View>
            <View style={styles.realDirection}>
              <Text style={styles.realDirectionText}>Направление: </Text>
              <Text style={styles.realDirectionText}>Славутич - Чернигов</Text>
            </View>
          </View>
        </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 1,
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection: 'column',
  },
  timeContainer: {
    flex: 1,
    flexDirection:'row',
  },
  sheludeText:{
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
  },
  realDirection:{
    flex: 1,
    flexDirection:'row',
  },
  realDirectionText: {
    color:'grey',
    fontSize: 12,
  },
  timeItem: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 0.5,
    // borderColor: 'black',
  },
  timeText: {
    fontSize: 20,
    textAlign: 'center',
  },
})
