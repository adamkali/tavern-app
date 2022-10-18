import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

// ========================================
// =========== Tavern Imports =============
// ========================================
import TavernProfile, { TavernModels } from '../../providers/receivers';
import { useTavernColor } from '../../helpers/hooks/useTavernColor';
import TavernColor from '../../helpers/design/TavernColor';
import { LooseText, TButton } from '../../components';
import * as Authenticate from '../../providers/receivers/Authenticate';
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';

let Color: TavernColor = new TavernColor();

export default function FirstTime() {
    useTavernColor().then((c) => (Color = c));

    const onSignUpPress = () => {
        // Use React Navigation to navigate to the SignUp screen
        Authenticate.setFirstTime();
        navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Tavern!</Text>
            <View style={styles.textContainer}>
                {/**
                 * Make a centered block of text that the user can scroll through
                 */}
                <ScrollView style={styles.textScroll}>
                    <Text style={styles.text}>
                        Tavern is a social media app that helps you find
                        your adventuring party.
                    </Text>
                    <Text style={styles.text}>
                        You can create a profile, find other Tabletop
                        RPG players, and start a party.
                    </Text>
                    <Text style={styles.text}>
                        And remember, Tavern is a safe space for all
                        players. No matter your gender, sexual
                        prefrence, or race. You are always welcome at
                        the tavern!
                    </Text>
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                {/**
                 * Make a button that takes the user to the next screen
                 */}
                <TButton
                    value="Sign Me Up!"
                    onPress={() => Authenticate.setFirstTime()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.background.normal,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Color.foreground.primary,
        fontSize: 30,
    },
    title: {
        color: Color.foreground.primary,
        fontSize: 50,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textScroll: {
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
