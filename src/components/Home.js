import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.contentStyle}>
        <Text style={styles.msgTextStyle}>
          home
        </Text>
      </View>
    );
  }
}

const styles = {
  contentStyle: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default Home;
