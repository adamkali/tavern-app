import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
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
