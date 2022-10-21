import React, { useMemo, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    TavernText as Text,
    TavernInput as Input,
    TButton as Button,
} from '../../components';
import TavernProfile, { TavernModels } from '../../providers/receivers';
import Providable from '../../providers/functors/Provideable';
import * as Authentication from '../../providers/receivers/Authenticate';
import { useTavernColor } from '../../helpers/hooks/useTavernColor';
import TavernColor from '../../helpers/design/TavernColor';
import { LightColors } from '../../helpers/design/Colors';


type AuthToken = TavernModels.TavernTypes.AuthToken;
type AuthRequest = TavernModels.TavernRequests.AuthRequest;

let Color = new TavernColor(LightColors);

export default function SignUp(): JSX.Element {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useTavernColor().then((c) => (Color = c));

    const authRequest: AuthRequest = useMemo(() => {
        return {
            username: username,
            user_email: email,
            password: password,
        } as AuthRequest;
    }, [username, email, password]);

    const onSubmit = async () => {
        console.log('Submitting');
        await TavernProfile.AuthClient.Register({
	    body: authRequest,
	}).then(
            (response: Providable<AuthToken>) => {
                if (!response.check()) {
                    console.log(response.error());
                    return;
                }
                if (response.run(Authentication.storeToken).check()) {
                    console.log('Token stored');
                } else {
                    console.log(
                        'Token not stored because: ' + response.error()
                    );
                }
            }
        );
    };

    return (
        <View>
            <Text>Sign Up</Text>
            <Input
                label="Username"
                placeholder="Your Username"
                value={username}
                onChangeText={(text: string) => {
                    setUsername(text);
                }}
            />
            <Input
                label="Email"
                placeholder="Your Email"
                value={email}
                onChangeText={(text: string) => {
                    setEmail(text);
                }}
            />
            <Input
                label="Password"
                placeholder="Your Password"
                value={password}
                onChangeText={(text: string) => {
                    setPassword(text);
                }}
            />
            <Button
                value="Submit"
                onPress={onSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.background.normal,
	flex: 1,
    },
    inputContainer: {
        flex: 1,
	alignItems: 'center',
	justifyContent: 'center',
	width: '80%',
    },
});
