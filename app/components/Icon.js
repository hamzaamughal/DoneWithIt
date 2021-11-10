import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Icon = ({
  name,
  size = 40,
  backgroundColor = '#fff',
  iconColor = '#fff',
}) => {
  return (
    <View>
      <MaterialCommunityIcons name={name} size={size} color={iconColor} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({});
