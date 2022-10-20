import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';

import { LightColors } from '../../helpers/design/Colors';
import TavernColor from '../../helpers/design/TavernColor';
import {
    useColorScheme,
    useTavernColor,
} from '../../helpers/hooks/useTavernColor';

let Color = new TavernColor(LightColors);

export default function TavernText(props: any): JSX.Element {
    useTavernColor().then((color) => {
        Color = color;
    });

    return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
    shadowText: {
        fontSize: 40,
        color: Color.foreground.primary,
        shadowColor: Color.foreground.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    text: {
        fontSize: 40,
        color: Color.foreground.primary,
    },
});
