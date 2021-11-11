import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import defaultStyles from '../config/styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const AppPicket = ({ icon, placeholder, items, onSelectItem, seletedItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color={defaultStyles.colors.medium}
            style={styles.icon}
          />
          <AppText style={styles.text}>
            {seletedItem ? seletedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons name='chevron-down' size={24} color='black' />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Button title='close' onPress={() => setModalVisible(true)} />
        <FlatList />
      </Modal>
    </>
  );
};

export default AppPicket;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
