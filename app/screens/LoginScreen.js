import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon='email'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={handleChange('email')}
              keyboardType='email-address'
              placeholder='Email'
            />
            <AppText style={{ color: 'red' }}>{errors.email}</AppText>
            <AppTextInput
              icon='lock'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry
            />
            <AppText style={{ color: 'red' }}>{errors.password}</AppText>
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
        )
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  container: {
    padding: 10,
  },
});
