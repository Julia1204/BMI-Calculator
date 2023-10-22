import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FE902A',
    borderRadius: 20,
    padding: 15,
    marginTop: 120,
    width: 105,
    height: 45,
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'Inter SemiBold',
  },
});

export default ButtonComponent;
