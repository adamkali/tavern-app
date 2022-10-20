import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import ColorNames from '../design/ColorNames';
import { LightColors } from '../design/Colors';
import TavernColor from '../design/TavernColor';

/**
 * uses AsyncStorage in order to store the user Theme prefrences
 *     uses the internal `useColorScheme()` to get the colorscheme
 *     from the mapping in the design directory.
 *
 * @returns {Promise<TavernColor>}
 */
export async function useTavernColor(): Promise<TavernColor> {
    const [colorScheme, setColorScheme] = React.useState(
        {} as TavernColor
    );

    await AsyncStorage.getItem('TavernDark')
        .then(async (i) => {
            if (!i) {
                setColorScheme(new TavernColor(''));
            }
            setColorScheme(await useColorScheme(i!));
        })
        .catch(() => setColorScheme(new TavernColor('')));

    return colorScheme;
}

export async function useColorScheme(
    scheme: string,
    callback?: (color: Promise<TavernColor>) => Promise<TavernColor>
): Promise<TavernColor> {
    const [color, setColor] = useState({} as TavernColor);

    const colorScheme =
        ColorNames.filter((i) => i.name === scheme)[0] || LightColors;

    // if ther is a callback, should work out of the box with useTavernColor
    if (callback) {
        callback(
            new Promise((resolve) => {
                return resolve(new TavernColor(colorScheme));
            })
        );
    }
    return await new Promise((resolve) => {
        resolve(new TavernColor(colorScheme));
    });
}
