import React, { Component } from 'react';
import { Button, StyleSheet } from 'react-native';

export class SideButton extends Component {
  render() {
    return (
      <Button
        onPress={this.props.onPressHandler}
        title={this.props.title}
        color="#841584"
      />
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 30,
    height: 30,
    marginBottom: 5,
    backgroundColor: '#f0f',
  },

});
