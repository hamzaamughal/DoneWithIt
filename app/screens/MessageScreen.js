import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
  {
    id: 1,
    title: 'Juan',
    description: 'Hola',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'Alia',
    description: 'Hoooohaa',
    image: require('../assets/mosh.jpg'),
  },
];

const MessageScreen = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => {
          return (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message selected', item)}
              renderRightActions={ListItemDeleteAction}
            />
          );
        }}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
