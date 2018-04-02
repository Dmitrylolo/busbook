import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

// import { MonoText } from '../components/StyledText';
import { SideButton } from '../components/SideButton';
import { ScheduleItem } from '../components/ScheduleItem';
import { TransportButton } from '../components/TransportButton';

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
  }

  transportClickHandler(e){
    console.log('transportClickHandler: ', e)
  }

  weekDayClickHandler(e){
    console.log('day clicked: ', e)
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topRow}>
          <TransportButton tapHandler={this.transportClickHandler.bind(this)} />
          <Text> Dima to do</Text>
        </View>

        <View style={styles.contentRow}>
          <View style={styles.buttonBar}>
            <SideButton title="Пр" onPressHandler={ this.weekDayClickHandler.bind(this) } />
            <SideButton title="Вт" onPressHandler={ this.weekDayClickHandler.bind(this) } />
            <SideButton title="Ср" onPressHandler={ this.weekDayClickHandler.bind(this) } />
            <SideButton title="Чт" onPressHandler={ this.weekDayClickHandler.bind(this) } />
            <SideButton title="Пт" onPressHandler={ this.weekDayClickHandler.bind(this) } />
            <SideButton title="Сб" onPressHandler={ this.weekDayClickHandler.bind(this) } />
            <SideButton title="Вс" onPressHandler={ this.weekDayClickHandler.bind(this) } />
          </View>

          <View style={styles.dataBar}>
            <ScrollView style={styles.dataBarContent}>
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
              <ScheduleItem />
            </ScrollView>
          </View>
        </View>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          YAY


          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 30,
    backgroundColor: '#fff',
  },

  topRow: {
    flex: 1,
    flexDirection: 'row',
  },
  contentRow: {
    flex: 10,
    flexDirection: 'row',
  },



  buttonBar:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  dataBar:{
    flex: 5,
    flexDirection: 'column',
    backgroundColor: '#FF3366'
  },

  // dataBarTop: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   backgroundColor: 'red',
  // },
  dataBarContent: {
    flex: 7,
    flexDirection: 'column',
    // backgroundColor: 'blue',
  },
});
