import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Mine from './components/Mine';
import Home from './components/Home';
import { CardSection } from './components/common';
import { mainSwitchHome, mainSwitchMine } from './actions';

class Main extends Component {
  componentWillMount() {

  }

  viewChange(index) {
    if (index === 0) {
      this.props.mainSwitchHome();
    } else {
      this.props.mainSwitchMine();
    }
  }

  renderView() {
    if (this.props.index === 1) {
      return <Mine />;
    }
    return <Home />;
  }

  render() {
    const $this = this;
    return (
        <View style={styles.boxStyle}>
          <View style={styles.contentStyle}>
            <TouchableOpacity style={styles.viewStyle} onPress={this.viewChange.bind($this, 0)}>
              <Text style={styles.textStyle}>首页</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewStyle} onPress={this.viewChange.bind($this, 1)}>
              <Text style={styles.textStyle}>我</Text>
            </TouchableOpacity>
          </View>
          <CardSection>
            {this.renderView()}
          </CardSection>
        </View>
    );
  }
}

const styles = {
  boxStyle: {
    flexDirection: 'column-reverse',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  contentStyle: {
    flexDirection: 'row',
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
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

export default connect(mapStateToProps, { mainSwitchHome, mainSwitchMine })(Main);
