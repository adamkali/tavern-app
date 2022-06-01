import { useEffect, useState } from "react";
import { Text, View as DefaultView, ScrollView as Scroll,  StyleSheet, LogBox } from 'react-native';
import { Card, Button } from '@rneui/themed';

import * as TavernModels from "../../helpers/models";
import { DarkHorizon } from '../../components/colorthemes';
import CharacterDetails from './characterInfo';

export default function UserCard({
	user,
	loaded,
}: {
	user: TavernModels.User,
	loaded: boolean,
}): JSX.Element {
	const entity: TavernModels.User = user;
	return (
		<DefaultView>
			{ user.id !== (null || undefined) ?
			<Card containerStyle={ styles.cardContainer }>
				<Card.Title style={styles.title}>{entity.username}</Card.Title>
				<Card.Divider>
				<DefaultView style={ styles.separator} />
			    	<Scroll>
					<Text style={ styles.text }>{entity.bio}</Text>
					<Text style={ styles.text }>Tags:</Text>
					{ entity.tags.split(', ').map((tag) => {
					    return <Text style={ styles.text }>{tag}</Text>
					})}
					<Text style={ styles.text }>{entity.player_preference}</Text>
				</Scroll>
				<DefaultView style={ styles.separator} />
				<Text style={ styles.title }>Characters</Text>
				<Scroll>
					{entity.user_characters.map((character) => {
						return (<CharacterDetails character={character} />);
					})}
				</Scroll>
				</Card.Divider>
		    </Card> : <Text>Uh oh something happened...</Text>}
		</DefaultView>
	)
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DarkHorizon.colors.card,
        color: DarkHorizon.colors.text,
	borderRadius: 12,
	height: 100,
	width: 250,
    },
    text: {
        fontSize: 12,
        color: DarkHorizon.colors.text,
        marginVertical: 10,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    title: {
        fontSize: 18,
        color: DarkHorizon.colors.text,
        marginVertical: 10,
    },
});
