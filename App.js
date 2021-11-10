import React from 'react';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessageScreen from './app/screens/MessageScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
// import {} from '@expo/vector-icons'

export default function App() {
  return (
    <Screen>
      <Icon name='email' size={15} backgroundColor='red' iconColor='white' />
    </Screen>
  );
}
