import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
