import { useEffect, useState } from 'react';
import { Text, View as DefaultView, ScrollView as Scroll,  StyleSheet } from 'react-native';
import { Card, Button } from '@rneui/themed';

import { UserService } from '../helpers/requests';
import * as TavernModels from '../helpers/models';

import { PaperPen, DarkHorizon } from '../components/colorthemes';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [user, setUser] = useState({} as TavernModels.User);

    useEffect(() => {
        UserService.getUserByID({
            userId: '34ace1435548687a3ed7443b5a466597',
        }).then(
            (res) => {
                if (res.successful & res.data) {
                    setUser(res.data);
                } else {
                    //
                }
            },
            (err) => console.log("Hi")
        ) 
    }, []);
    
    return (
        <DefaultView style={ styles.styleContainer }>
            <Card>
                <Card.Title>Hi</Card.Title>
                <Card.Divider />
                    <Scroll>
                        
                    </Scroll>
            </Card>
            <Text style={styles.title}>This is my thingd</Text>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    styleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DarkHorizon.colors.background,
        color: DarkHorizon.colors.text
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: DarkHorizon.colors.text
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%', 
    },
});
