import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const GenderSelector = ({ selectedGender, onGenderChange }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Sex</Text>
            <View style={styles.genderContainer}>
                <TouchableOpacity onPress={() => onGenderChange('male')}>
                    <Text style={selectedGender === 'male' ? styles.selectedGenderButton : styles.genderButtonText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onGenderChange('female')}>
                    <Text style={selectedGender === 'female' ? styles.selectedGenderButton : styles.genderButtonText}>Female</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    label: {
        width: 223,
        fontSize: 15,
        fontFamily: 'Inter SemiBold',
        color: '#D9D9D9',
    },
    inputContainer: {
        marginBottom: 20,
    },
    genderContainer: {
        width: 223,
        height: 29,
        flexDirection: 'row',
        marginTop: 7,
        justifyContent: 'space-around'
    },
    genderButtonText: {
        fontSize: 15,
        fontWeight: '600',
        fontFamily: 'Inter SemiBold',
        color: '#706C6C',
        
    },
    selectedGenderButton: {
        fontSize: 15,
        fontWeight: '600',
        color: '#D9D9D9',
    },
});
export default GenderSelector;
