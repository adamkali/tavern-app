import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

// ====================================

impo

export default function FirstTime() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>First Time</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5c0099',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#ffe6ff',
        fontSize: 30,
    },
});
