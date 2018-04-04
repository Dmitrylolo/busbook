import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

export class CityTo extends Component {
  constructor(props) {
    super(props);
    this.state = {cityTo: 'Славутич'};
  }


  onChangeText(data){
    this.setState({cityTo: data})
    return console.log(this.state.cityTo)
  }

  render() {
      let data = [{
            value: 'Славутич',
          }, {
            value: 'Чернигов',
          }, {
            value: 'Киев',
          }, {
            value: 'Любеч',
          }, {
            value: 'Мнёв',
          }, {
            value: 'Неданчичи',
          }];
      let position = (-1)*data.length
      let count = data.length
    return (
         <View style={styles.dropDown}>
            <Dropdown style={styles.aaa}
              value={this.state.cityTo}
              label={'откуда'}
              onChangeText={this.onChangeText.bind(this)}
              data={data}
              selectedItemColor={'purple'}
              dropdownOffset= {{top :12, left: 0}}
              dropdownPosition = {position}
              itemCount = {count}
            />
          </View>
    )
  }
}

const styles = StyleSheet.create({
  dropDown: {
    flex: 1,
    padding:5,
  },
  aaa: {

  }
})
