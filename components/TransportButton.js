import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export class TransportButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      transportType: 'bus', // 'bus' & 'train'
    }
  }

  _onPressButton(){
    // this is just for FYI (for your information)
    // let newState = 'bus'
    // if(prevState.transportType === 'bus'){
    //   newState = 'train'
    // } else {
    //   newState = 'bus'
    // }
    // this.setState( { transportType: newState })

    this.setState( prevState => {
      const newState = prevState.transportType === 'bus' ? 'train' : 'bus'
      this.props.tapHandler(newState)
      return { transportType: newState }
    })


  }

  render() {
    const { transportType } = this.state

    return (
      <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="white">
        <FontAwesomeIcon name={transportType} style={styles.transportIcon} />
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 1,
    backgroundColor: '#ccc',
    flex: 1,
    flexDirection: 'row',
  },

  directionText:{
    color: 'red',
    fontSize: 12,
    textAlign: 'center',
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

  transportIcon:{
    padding: 20,
    fontSize: 26,
    // width: 40,
    // height: 40,
  }
})
