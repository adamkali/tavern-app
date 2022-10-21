import { useTavernColor } from '../../helpers/hooks/useTavernColor';
import TavernColor from '../../helpers/design/TavernColor';
import React from 'react';
import {
    GestureResponderEvent,
    NativeSyntheticEvent,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LightColors } from '../../helpers/design/Colors';

let Color = new TavernColor(LightColors);

export default function TButton({
    value,
    onPress,
}: {
    value: string;
    onPress(e: GestureResponderEvent): void;
}): JSX.Element {
    useTavernColor().then((color) => {
        Color = color;
    });

    return (
        <SafeAreaView>
            <TouchableOpacity
                style={styles.btn}
                onPress={(e) => onPress(e)}
            >
                <Text>{value}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    btn: {
        fontSize: 40,
        backgroundColor: Color.background.accent,
        color: Color.foreground.primary,
	borderRadius: 10,
	height: 50,
    },
});
