// This component should serve as a wrapper for all inputs in the app
// It should be able to be initialized with props
// It can have a label, placeholder, and value
// It chould have a callback function for when the value changes
// It should have a callback function for when the input is submitted

import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { LightColors } from '../../helpers/design/Colors';
import TavernColor from '../../helpers/design/TavernColor';
import { useTavernColor } from '../../helpers/hooks/useTavernColor';

let Color: TavernColor = new TavernColor(LightColors);

export default function TavernInput(props: any): JSX.Element {
    useTavernColor().then((color) => {
        Color = color;
    });

    return (
        <View>
            <View style={styles.labelView}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    onSubmitEditing={props.onSubmitEditing}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        display: 'flex',
        height: 80,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBackground: {
        backgroundColor: Color.background.dark,
        borderRadius: 10,
        shadowColor: Color.foreground.tertiary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputText: {
        color: Color.foreground.primary,
    },
    label: {
        color: Color.foreground.secondary,
    },
    placeholder: {
        color: 'grey',
    },
    labelView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    inputView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
