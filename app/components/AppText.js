import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;

Platform.select({
  ios: {
    fontFamily: 'Avenir',
    fontSize: 20,
  },
  android: {
    fontFamily: 'Roboto',
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
  },
});
