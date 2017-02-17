import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { mainSwitchHome, mainSwitchMine } from '../../actions';

class Footer extends Component {
  viewChange(index) {
    if (index === 0) {
      this.props.mainSwitchHome();
    } else {
      this.props.mainSwitchMine();
    }
  }

  render() {
    const $this = this;
    return (
      <View style={styles.contentStyle}>
        <TouchableOpacity style={styles.viewStyle} onPress={this.viewChange.bind($this, 0)}>
          <Text style={styles.textStyle}>首页</Text>
        </TouchableOpacity>
        <Text>{this.props.index}</Text>
        <TouchableOpacity style={styles.viewStyle} onPress={this.viewChange.bind($this, 1)}>
          <Text style={styles.textStyle}>我</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  contentStyle: {
    flexDirection: 'row',
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    width: Dimensions.get('window').width / 2,
  },
  textStyle: {
    fontSize: 20,
  }
};

const mapStateToProps = ({ main }) => {
  const { index } = main;

  return { index };
};

export default connect(mapStateToProps, { mainSwitchHome, mainSwitchMine })(Footer);
