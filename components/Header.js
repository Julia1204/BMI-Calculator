import React from 'react';
import { View, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';

const logo = '/Users/julia/Desktop/BMICalculator/BMICalculator/assets/images/logo.svg';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.appTitle}>BMI Calculator</Text>
      <SvgUri
        width="54"
        height="63"
        uri={logo}
      />
    </View>
  );
};

const styles = {
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 30,
  },
  appTitle: {
    fontSize: 20,
    fontFamily: 'Inter SemiBold',
    color: '#D9D9D9',
    textAlign: 'left',
  },
};

export default Header;
