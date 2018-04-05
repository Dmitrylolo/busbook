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
      data: [
        {value: 'Славутич', props: { disabled: true }}, 
        {value: 'Чернигов', props: { disabled: false }}, 
        {value: 'Киев', props: { disabled: true }}, 
        {value: 'Любеч', props: { disabled: false }}, 
        {value: 'Мнёв', props: { disabled: false }}, 
        {value: 'Неданчичи', props: { disabled: false }}
        ],
    }
  }

  disableItem (item, data) {
    //if(this.state.data.value = data)

  }

  _onPressButton(){
    temp1 = this.state.cityFrom
    temp2 = this.state.cityTo
    this.setState({cityFrom: temp2})
    this.setState({cityTo: temp1})
    console.log(this.state.filter(({ ref }) => ref && ref.isFocused()))

    }



  onChangeCityFrom (data) {
    enable = this.state.cityFrom
    item = []
    item = this.state.data
    this.setState({cityFrom: data})

    disabledItem = item.forEach((value, index, ar) =>  {  
      if(value.value == data) {
        value.props.disabled = true
        console.log('city: '+value.value+' -> '+value.props.disabled)
      }     
    })
    //this.setState({data:disabledItem})
    enabledItem = item.forEach((value, index, ar) =>  {  
      if(value.value == enable) {
        value.props.disabled = false
        console.log('city: '+value.value+' -> '+value.props.disabled)
      }     
    })
    //this.setState({data:enabledItem})

    
  }

  onChangeCityTo (data) {
    enable = this.state.cityTo
    item = []
    item = this.state.data
    this.setState({cityTo: data})

    disabledItem = item.forEach((value, index, ar) =>  {  
      if(value.value == data) {
        value.props.disabled = true
        console.log('city: '+value.value+' -> '+value.props.disabled)
      }     
    })
    //this.setState({data:disabledItem})
    enabledItem = item.forEach((value, index, ar) =>  {  
      if(value.value == enable) {
        value.props.disabled = false
        console.log('city: '+value.value+' -> '+value.props.disabled)
      }     
    })
    //this.setState({data:enabledItem})
  }


  render() {

    let position = (-1)*this.state.data.length
    let count = this.state.data.length

    return (
      <View style={styles.dropDown}>
        <View style={styles.ddMenu}>
            <Dropdown
              value={this.state.cityFrom}
              label={cityFromText}
              onChangeText={this.onChangeCityFrom}
              data={this.state.data}
              selectedItemColor={'purple'}
              dropdownOffset= {{top :12, left: 0}}
              dropdownPosition = {position}
              itemCount = {count}
              propsExtractor={({ props }, index) => props}
            />
        </View>

      <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="white" style={styles.directionButton} >
        <FontAwesomeIcon name={'exchange'} style={styles.directionButtonText} />
      </TouchableHighlight>
        <View style={styles.ddMenu}>
            <Dropdown
              value={this.state.cityTo}
              label={cityToText}
              onChangeText={this.onChangeCityTo}
              data={this.state.data}
              selectedItemColor={'purple'}
              dropdownOffset= {{top :12, left: 0}}
              dropdownPosition = {position}
              itemCount = {count}
              propsExtractor={({ props }, index) => props}
            />
        </View>
    </View>
    )
  }
}

const cityToText = 'Куда:'
const cityFromText = 'Откуда:'

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