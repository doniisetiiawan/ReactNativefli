/* eslint-disable react/require-default-props,react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const boldTextStyles = StyleSheet.create({
  text: {
    fontWeight: '600',
  },
});
const Bold = ({ children, style, ...otherProps }) => (
  <Text
    style={[boldTextStyles.text, style]}
    {...otherProps}
  >
    {children}
  </Text>
);

const styles = StyleSheet.create({
  green: {
    color: 'green',
  },
});

const Democrv = () => (
  <View>
    <Bold
      onPress={() => console.log('Pressed!')}
      numberOfLines={2}
      style={styles.green}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Donec magna ipsum, lobortis quis rhoncus ac,
      suscipit sed dolor.
    </Bold>
  </View>
);

export default Democrv;

Bold.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};
