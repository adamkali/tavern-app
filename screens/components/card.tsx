import { useEffect, useState } from "react";
import { Text, View as DefaultView, ScrollView as Scroll,  StyleSheet, LogBox } from 'react-native';
import { Card, Button } from '@rneui/themed';

import * as TavernModels from "../../helpers/models";
import { DarkHorizon } from '../../components/colorthemes';

export default function UserCard({
	user,
	loaded,
}: {
	user: TavernModels.User,
	loaded: boolean,
}): JSX.Element {
	const [ cardUser, setCardUser ] = useState(user);
	const tags = user.tags.split(', ');
	return (
		<DefaultView>
		    { loaded ? <Card containerStyle={ styles.cardContainer }>
			    <DefaultView>
				<Card.Title>{user.username}</Card.Title>
				<Card.Divider>
				    <Scroll>
					<Text style={ styles.text }>{cardUser.bio}</Text>
					<DefaultView style={ styles.separator} />
					<Text style={ styles.text }>Tags:</Text>
					{ tags.map((tag) => {
					    return <Text style={ styles.text }>{tag}</Text>
					})}
				    </Scroll>
				</Card.Divider>
			    </DefaultView>
		    </Card> : <Text>Hi</Text>}
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
	borderRadius: 10,
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
});
