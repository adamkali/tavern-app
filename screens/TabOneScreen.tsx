import { useEffect, useState } from 'react';
import { Text, View as DefaultView, ScrollView as Scroll,  StyleSheet } from 'react-native';
import { Card, Button } from '@rneui/themed';

import { UserService } from '../helpers/services';
import * as TavernModels from '../helpers/models';

import { PaperPen, DarkHorizon } from '../components/colorthemes';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [user, setUser] = useState({} as TavernModels.User);
    const [errorMessage, setErrorMessage] = useState('');
    const [tags, setTags] = useState([] as string[]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        UserService.getUserByID({
            userId: '003602aad07868e0b19e19351cdb7e59',
        }).then(
            (res) => {
                if (res.successful && res.data) {
                    setUser(res.data);
                } else {
                    setErrorMessage(res.message);
                }
            },
            (err) => setErrorMessage(`${err}`)
        ).then(
            (_) => {
                if ( user.tags !== undefined ) {
                    setTags(user.tags.split(', '));
                    setLoaded(true);
                }
            }
        ).catch(
            (reason) => {
                console.warn(reason);
            }
        )
    }, []);
    

    return (
        <DefaultView style={ styles.styleContainer }>
            <Text style={styles.title}>This is my thingd</Text>
            <Card containerStyle={ styles.cardContainer }>
                { loaded ?
                    <DefaultView>
                        <Card.Title>{user.username}</Card.Title>
                        <Card.Divider>
                            <Scroll>
                                <Text style={ styles.text }>{user.bio}</Text>
                                <DefaultView style={ styles.separator} />
                                <Text style={ styles.text }>Tags:</Text>
                                { tags.map((tag) => {
                                    return <Text style={ styles.text }>{tag}</Text>
                                })}
                            </Scroll>
                        </Card.Divider>
                    </DefaultView>
                    : <Text style={ styles.text }>{errorMessage}</Text>
                }
            </Card>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DarkHorizon.colors.card,
        color: DarkHorizon.colors.text,
    },
    styleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DarkHorizon.colors.background,
        color: DarkHorizon.colors.text
    },
    text: {
        fontSize: 12,
        color: DarkHorizon.colors.text,
        marginVertical: 10,
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
