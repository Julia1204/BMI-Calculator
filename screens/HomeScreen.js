import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Snackbar } from 'react-native-paper';
import Header from '../components/Header.js';
import InputComponent from '../components/InputComponent.js';
import GenderSelector from '../components/GenderSelector.js';
import ButtonComponent from '../components/ButtonComponent.js';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState('');
  const [isSnackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const validateInput = (input, regex) => {
    return regex.test(input);
  };


  const handleCalculateBMI = () => {
    const errors = {};

    const weightRegex = /^\d+(\.\d+)?$/;
    const heightRegex = /^\d+(\.\d+)?$/;
    const ageRegex = /^[1-9]\d*$/;

    if (!weight || !height || !age) {
      setSnackbarMessage('Field is empty');
      setSnackbarVisible(true);
      return;
    }
    if (!validateInput(weight, weightRegex) ||
      !validateInput(height, heightRegex) ||
      !validateInput(age, ageRegex)) {
        return;
      }
    setSnackbarVisible(false);
    const weightValue = parseFloat(weight) || 0;
    const heightValue = parseFloat(height) || 0;
    const ageValue = parseFloat(age) || 0;
    const bmi = (weightValue / ((heightValue / 100) * (heightValue / 100))).toFixed(3);
    setResult(bmi);
    navigation.navigate('Result', { bmi, gender });
  };

  return (
    <View style={styles.container}>
      <Header BmiCalculator />
      <View style={styles.itemContainer}>
        <InputComponent
          label="Weight"
          value={weight}
          onChangeText={setWeight}
          keyboardType="numeric"
        />
        <InputComponent
          label="Height"
          value={height}
          onChangeText={setHeight}
          keyboardType="numeric"
        />
        <InputComponent
          label="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        <View style={styles.spacingStyle}>
          <GenderSelector selectedGender={gender} onGenderChange={setGender} />
        </View>

        <ButtonComponent onPress={handleCalculateBMI} />
        <Snackbar
          visible={isSnackbarVisible}
          onDismiss={() => setSnackbarVisible(false)}
        >
          {snackbarMessage}
        </Snackbar>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: '#43928a',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#43928a',
    justifyContent: 'center',
  },
  spacingStyle: {
    padding: 20,
  }
});

export default HomeScreen;

