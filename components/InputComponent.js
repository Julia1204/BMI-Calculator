import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';


const InputComponent = ({ label, value, onChangeText, keyboardType, styleType }) => {
  const styles = styleType === 'output' ? outputStyles : inputStyles;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  label: {
    fontSize: 15,
    textAlign: 'left',
    fontFamily: 'Inter SemiBold',
    color: '#D9D9D9',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: 223,
    height: 29,
    fontFamily: 'Inter SemiBold',
    color: '#706C6C',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingLeft: 15,
  },
});

const outputStyles = StyleSheet.create({
  label: {
    fontSize: 15,
    fontFamily: 'Inter SemiBold',
    color: '#D9D9D9',
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    width: 223,
    height: 29,
    fontFamily: 'Inter SemiBold',
    color: '#706C6C',
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    paddingLeft: 15,
    textAlign: 'center',
  },
});

export default InputComponent;