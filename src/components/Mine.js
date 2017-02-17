import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, logout } from '../actions';
import { Card, CardSection, Button, Spinner } from './common';

class Mine extends Component {
  onButtonPress() {
    if (this.props.msg === 'login success') {
      this.props.logout();
    } else {
      this.props.loginUser();
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    if (this.props.msg === 'login success') {
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
      <Card>
        <Text style={styles.msgTextStyle}>
          {this.props.msg}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  msgTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
  }
};

const mapStateToProps = ({ auth }) => {
  const { msg, loading } = auth;

  return { msg, loading };
};

export default connect(mapStateToProps, { loginUser, logout })(Mine);
