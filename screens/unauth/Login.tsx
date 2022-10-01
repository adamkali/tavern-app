import { View, Text, StyleSheet } from 'react-native';

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
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
