import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' size={35} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          size={35}
          color={colors.white}
        />
      </View>
      <Image
        source={require('../assets/chair.jpg')}
        style={styles.image}
        resizeMode='contain'
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
});
