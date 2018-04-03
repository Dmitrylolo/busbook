import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export class DirectionButton extends Component {
  _onPressButton(){
 
    }


  render() {

    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="white" style={styles.directionButton} >
        <FontAwesomeIcon name={'exchange'} style={styles.directionButtonText} />
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  directionButtonText:{
    fontSize:26,
  },
  directionButton: {
    flex: .4,
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'grey',
  },
})