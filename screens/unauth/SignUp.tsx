// Create a signup screen with a form to create a new user
// There should be a place to enter a username, email, and password
// There should be a button to submit the form
// There should be a state variable with a type of AuthRequest
//    from TavernModels from the providers/recievers folder
// When the submit button is pressed, then use the Register function
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { TavernText as Text } from '../../components';

export default async function SignUp(): Promise<JSX.Element> {
    return (
        <View>
            <Text>Sign Up</Text>
        </View>
    );
}
