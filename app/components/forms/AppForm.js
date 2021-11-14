import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppForm = ({ initialValue, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
