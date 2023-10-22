import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Header from '../components/Header';
import InputComponent from '../components/InputComponent';


const normalMaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/normal_male.svg';
const normalFemaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/normal.svg';
const obeseMaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/obese_male.svg';
const obeseFemaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/obese.svg';
const overweightMaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/overweight_male.svg';
const overweightFemaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/overweight.svg';
const underweightMaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/underweight_male.svg';
const underweightFemaleImage = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/underweight.svg';

const ResultScreen = ({ route, navigation }) => {
  const { bmi, gender } = route.params;
  let imageSource = null;
  let resultText = '';

  if (gender === 'male') {
    if (bmi < 18.5) {
      imageSource = underweightMaleImage;
      resultText = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      imageSource = normalMaleImage;
      resultText = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
      imageSource = overweightMaleImage;
      resultText = 'Overweight';
    } else {
      imageSource = obeseMaleImage;
      resultText = 'Obese';
    }
  } else if (gender === 'female') {
    if (bmi < 18.5) {
      imageSource = underweightFemaleImage;
      resultText = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      imageSource = normalFemaleImage;
      resultText = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
      imageSource = overweightFemaleImage;
      resultText = 'Overweight';
    } else {
      imageSource = obeseFemaleImage;
      resultText = 'Obese';
    }
  }


  return (
    <View style={styles.container}>
      <Header BmiCalculator />
      <View style={styles.itemContainer}>
        <InputComponent
          styleType="output"
          label="Result"
          value={`${bmi} kg/m²`}
        />
        <SvgUri
          style={styles.image}
          width="127"
          height="326"
          uri={imageSource}
        />
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: '#43928a',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    backgroundColor: '#43928a',
    justifyContent: 'center',

  },
  resultText: {
    fontSize: 13,
    fontFamily: 'Inter SemiBold',
    color: 'white',
    padding: 15,
    marginBottom: 15,
  },
  image: {
    marginBottom: 5,
  }
});

export default ResultScreen;
