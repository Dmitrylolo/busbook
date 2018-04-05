import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-material-dropdown';

export class DirectionBus extends Component {
    constructor(props) {
      super(props)
      this.onChangeCityTo = this.onChangeCityTo.bind(this)
      this.onChangeCityFrom = this.onChangeCityFrom.bind(this)

      this.state = {
        cityFrom: 'Киев',
        cityTo: 'Славутич',
      }

    }


  _onPressButton(){
    temp1 = this.state.cityFrom
    temp2 = this.state.cityTo
    this.setState({cityFrom: temp2})
    this.setState({cityTo: temp1})
 
    }

  onChangeCityFrom (data) {
    this.setState({cityFrom: data})
    console.log(this.state.cityFrom)
  }

  onChangeCityTo (data) {
    this.setState({cityTo: data})
    console.log(this.state.cityTo)
  }


  render() {

    let data = [
          {value: 'Славутич',}, 
          {value: 'Чернигов',}, 
          {value: 'Киев',}, 
          {value: 'Любеч',}, 
          {value: 'Мнёв',}, 
          {value: 'Неданчичи',}
          ];
    let position = (-1)*data.length
    let count = data.length

    return (
      <View style={styles.dropDown}>
        <View style={styles.ddMenu}>
            <Dropdown
              value={this.state.cityFrom}
              label={'откуда'}
              onChangeText={this.onChangeCityFrom}
              data={data}
              selectedItemColor={'purple'}
              dropdownOffset= {{top :12, left: 0}}
              dropdownPosition = {position}
              itemCount = {count}
            />
        </View>

      <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="white" style={styles.directionButton} >
        <FontAwesomeIcon name={'exchange'} style={styles.directionButtonText} />
      </TouchableHighlight>
        <View style={styles.ddMenu}>
            <Dropdown
              value={this.state.cityTo}
              label={'откуда'}
              onChangeText={this.onChangeCityTo}
              data={data}
              selectedItemColor={'purple'}
              dropdownOffset= {{top :12, left: 0}}
              dropdownPosition = {position}
              itemCount = {count}
            />
        </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  dropDown: {
    flex:1,
    flexDirection:'row',
  },
  directionButtonText:{
    fontSize:20,
  },
  ddMenu: {
    flex:1,
    padding: 5,

  },
  directionButton: {
    flex: .4,
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor:'lightgrey',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'black',
    padding: 2,
  },
})