import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';
import { useStore } from 'app/store';

const Login: React.FC = () => {
  const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

  const onLogin = () => {
    setIsLoggedIn(true);
  };
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.login}>Login Status </Text>
        <Button icon="login" mode="outlined" onPress={onLogin}>
          Login
        </Button>
        <Button
          mode="text"
          style={styles.forgot}
          labelStyle={styles.labelStyle}
          onPress={onForgot}>
          Forgot Password
        </Button>
      </View>
    </View>
  );
};

export default Login;
