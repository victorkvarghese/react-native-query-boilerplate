import React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { Appbar, Card, Paragraph } from 'react-native-paper';
import { useStore } from 'app/store';

import styles from './styles';
import { GetUserDetails } from 'app/services/react-query/queries/user';
const Home: React.FC = () => {
  const setIsLoggedIn = useStore(state => state.setIsLoggedIn);
  const { isLoading, isFetching, data = { results: [] } } = GetUserDetails();

  const onLogOut = () => {
    setIsLoggedIn(false);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card} mode="elevated">
      <Card.Cover source={{ uri: item.image }} />
      <Card.Title title={item.name} />
      <Card.Content>
        <View style={styles.content}>
          <Paragraph>Status: {item.status}</Paragraph>
          <Paragraph>Species: {item.species}</Paragraph>
          <Paragraph>Gender: {item.gender}</Paragraph>
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Rick and Morty" subtitle="All Characters" />
        <Appbar.Action icon="logout" onPress={onLogOut} />
      </Appbar.Header>

      <FlatList
        data={data.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isLoading || isFetching}
            onRefresh={() => {}}
          />
        }
      />
    </View>
  );
};

export default Home;
