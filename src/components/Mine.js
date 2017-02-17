import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, logout } from '../actions';
import { CardSection, Button, Spinner } from './common';

class Mine extends Component {
  onButtonPress() {
    if (this.props.loginStatus) {
      this.props.logout();
    } else {
      this.props.loginUser();
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    if (this.props.loginStatus) {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Logout
        </Button>
      );
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Login
        </Button>
      );
    }
  }

  render() {
    return (
      <View style={styles.contentStyle}>
        <Text style={styles.msgTextStyle}>
          {this.props.msg}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
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
  }
};

const mapStateToProps = ({ auth }) => {
  const { msg, loading, loginStatus } = auth;

  return { msg, loading, loginStatus };
};

export default connect(mapStateToProps, { loginUser, logout })(Mine);
