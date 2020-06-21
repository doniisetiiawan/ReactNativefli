import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const boldTextStyles = StyleSheet.create({
  text: {
    fontWeight: '600',
  },
});
const Bold = ({ children }) => (
  <Text style={boldTextStyles.text}>{children}</Text>
);

const bodyCopyStyles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#333',
  },
});
const BodyCopy = ({ children }) => (
  <Text style={bodyCopyStyles.text}>{children}</Text>
);

const headlineStyles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#333',
  },
});
const Headline = ({ children }) => (
  <Bold>
    <Text style={headlineStyles.text}>{children}</Text>
  </Bold>
);

const Demo = () => (
  <View>
    <Headline>This is a header</Headline>
    <BodyCopy>
      This is my regular or <Bold>bold</Bold> text.
    </BodyCopy>
  </View>
);

export default Demo;

Bold.propTypes = {
  children: PropTypes.node.isRequired,
};

BodyCopy.propTypes = {
  children: PropTypes.node.isRequired,
};

Headline.propTypes = {
  children: PropTypes.node.isRequired,
};
