import { useEffect, useState } from 'react';
import { Text, View as DefaultView, ScrollView as Scroll,  StyleSheet } from 'react-native';
import { Card, Button } from '@rneui/themed';

import TavernApi from '../helpers/services/ProfileService';
import * as TavernModels from '../helpers/models';
import UserCard from './components/card';
import { PaperPen, DarkHorizon } from '../components/colorthemes';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [user, setUser] = useState({} as TavernModels.User);
    const [errorMessage, setErrorMessage] = useState('');
    const [loaded, setLoaded] = useState(false);

	useEffect(() => {
        TavernApi.UserService({
			userId: '0be2f1e14132bf99fe7e27dbdbe02aaf',
		}).then(
			(res) => {
				if (res.successful && res.data) {
					console.log(res.data);
					setUser(res.data as TavernModels.User);
				} else {
					setErrorMessage(res.message);
				}
			},
			(err) => setErrorMessage(`${err}`)
		).then(
			(_) => {
				setLoaded(true);
		    	}
		).catch(
		    	(reason) => {
				console.warn(reason);
		    	}
		)
	}, [])

    return (
        <DefaultView style={ styles.styleContainer }>
                <Text style={styles.title}>Tavern</Text>
		<UserCard user={user} loaded={loaded} />
		<Text style={styles.text}>{errorMessage}</Text>
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
