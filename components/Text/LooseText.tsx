import {
    useColorScheme,
    useTavernColor,
} from '../../helpers/hooks/useTavernColor';
import TavernColor from '../../helpers/design/TavernColor';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    SafeAreaView,
} from 'react-native';

let Color = new TavernColor();

// TODO: Add icons as a pass in value...
function LooseText({
    title,
    Icon,
    defaultValue,
    onChange,
}: {
    title: string;
    Icon(): JSX.Element | null;
    defaultValue: string;
    onChange(e: NativeSyntheticEvent<TextInputChangeEventData>): void;
}): JSX.Element {
    useTavernColor().then((color) => {
        Color = color;
    });

    return (
        <SafeAreaView>
            <Text style={styles.lt}>{title}</Text>
            <View style={styles.bg}>
                {Icon && <Icon />}

                <TextInput
                    style={styles.ti}
                    defaultValue={defaultValue ?? 'Value'}
                    onChange={(e) => onChange(e)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    lt: {
        margin: 5,
        color: Color.foreground.tertiary,
        fontSize: 20,
    },
    bg: {
        flex: 1,
        opacity: 0.8,
        backgroundColor: Color.background.dark,
        borderBottomColor: Color.background.accent,
        height: 40,
        width: '80%',
        borderRadius: 10,
        borderBottomWidth: 5,
    },
    ti: {
        justifyContent: 'flex-start',
        fontStyle: 'italic',
        padding: 5,
        marginBottom: 10,
        color: Color.foreground.secondary,
        fontSize: 30,
    },
});

export default LooseText;
