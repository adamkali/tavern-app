import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

// Tavern App Imports
import * as Authentication from './helpers/services/Authenticate';
import * as TavernProfileService from './helpers/services/TavernProfileClient';
import * as TavernProfileModels from './helpers/models';
import React from 'react';
// End Tavern App Imports

function App() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();
    const viewStyle = tw(
        'flex items-center justify-center h-full w-full bg-slate-400'
    );

    const setUpRender = (): JSX.Element => {
        let isFirstTime = false;
        let isLoggedIn = false;

        Authentication.isFirstTime()
            .then((result) => {
                return result;
            })
            .catch((error) => {
                console.log(error);
            });
        Authentication.isLoggedIn()
            .then((result) => {
                return result;
            })
            .catch((error) => {
                console.log(error);
            });

        if (isFirstTime) {
            return (
                <View style={viewStyle}>
                    <Text style={tw('text-white text-2xl')}>
                        First Time
                    </Text>
                </View>
            );
        } else if (isLoggedIn) {
            return (
                <View style={viewStyle}>
                    <Text style={tw('text-white text-2xl')}>
                        Logged In
                    </Text>
                </View>
            );
        } else {
            return (
                <View style={viewStyle}>
                    <Text style={tw('text-white text-2xl')}>
                        Not Logged In
                    </Text>
                </View>
            );
        }
    };

    return (
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>{setUpRender()}</NavigationContainer>
        </TailwindProvider>
    );
}

export default App;
