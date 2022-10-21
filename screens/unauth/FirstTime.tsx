import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

// ========================================
// =========== Tavern Imports =============
// ========================================
import TavernProfile, { TavernModels } from '../../providers/receivers';
import { useTavernColor } from '../../helpers/hooks/useTavernColor';
import TavernColor from '../../helpers/design/TavernColor';
import { TButton } from '../../components';
import * as Authenticate from '../../providers/receivers/Authenticate';
import { LightColors } from '../../helpers/design/Colors';

let Color: TavernColor = new TavernColor(LightColors);

export default function FirstTime({ navigation }: any): JSX.Element {
    useTavernColor().then((c) => (Color = c));

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
                <TButton
                    value="Sign Me Up!"
                    onPress={() => {
                        Authenticate.setFirstTime();
			console.log("First Time");
                        navigation.navigate('SignUp');
                    }}
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
        color: Color.foreground.secondary,
        fontSize: 30,
	marginTop: 10,
    },
    title: {
        color: Color.foreground.secondary,
        fontSize: 50,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textScroll: {
        width: '80%',
	backgroundColor: Color.background.dark,
	borderRadius: 10,
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
