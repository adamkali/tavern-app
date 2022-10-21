import { TailwindProvider, useTailwind } from 'tailwind-rn';
import utilities from './tailwind.json';
import {
    NavigationContainer,
    StackActions,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tavern App Imports
import * as Authentication from './providers/receivers/Authenticate';
import Login from './screens/unauth/Login';
import Home from './screens/auth/home';
import FirstTime from './screens/unauth/FirstTime';
import SignUp from './screens/unauth/SignUp';
import React, { useEffect } from 'react';
// End Tavern App Imports

function App() {
    // Use useTailwind to make the styles for the elements in the component
    const tw = useTailwind();
    const viewStyle = tw(
        'flex items-center justify-center h-full w-full bg-slate-400'
    );

    const Stack = createNativeStackNavigator();
    let startPoint = 'FirstTime';

    const whereStart = async (): Promise<string> => {
        const isFirstTime = await Authentication.isFirstTime();
        const isLoggedIn = await Authentication.isLoggedIn();
        if (isFirstTime) {
            return 'FirstTime';
        } else if (isLoggedIn) {
            return 'Home';
        } else {
            return 'Login';
        }
    };

    useEffect(() => {
        whereStart().then((res) => {
            startPoint = res;
        });
    }, []);

    return (
        <TailwindProvider utilities={utilities}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={startPoint}>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="FirstTime"
                        component={FirstTime}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </TailwindProvider>
    );
}

export default App;
