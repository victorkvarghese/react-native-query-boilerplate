import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { useStore } from 'app/store';

import styles from './styles';
const Home: React.FC = () => {
  const setIsLoggedIn = useStore(state => state.setIsLoggedIn);

  return (
    <View style={styles.container}>
      <Button
        icon="logout"
        mode="outlined"
        onPress={() => {
          setIsLoggedIn(false);
        }}>
        Logout
      </Button>
    </View>
  );
};

export default Home;
