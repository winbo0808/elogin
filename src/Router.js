import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Mine from './components/Mine';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={Mine} title="elogin" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
