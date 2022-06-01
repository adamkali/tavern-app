
import { useEffect, useState } from "react";
import { Text, View as DefaultView, ScrollView as Scroll,  StyleSheet, LogBox } from 'react-native';
import { Card, Button } from '@rneui/themed';

import * as TavernModels from "../../helpers/models";
import { DarkHorizon } from '../../components/colorthemes';

export default function CharacterDetails({
	character,
}: {
	character: TavernModels.Character;
}): JSX.Element {

	const modifier = (x: number): string => {
		const res = Math.floor(x/2) - 5;
		let result = ""
		if (res >= 0 ) {
			result = "+" + res.toString();
		} else {
			result = "-" + res.toString();
		}
		return result;
	}

	return (
		<DefaultView>
			<DefaultView style={styles.leftWrapper}>
				<DefaultView style={styles.rowView}>
					<Text style={styles.rowCellTitle}>
						Character:
					</Text>
					<Text style={styles.rowCellTitle}>
						{character.name}
					</Text>
				</DefaultView>
				<DefaultView style={styles.rowView}>
					<Text style={styles.rowCellTitle}>
						Class: {character.character_class}
					</Text>
					<Text style={styles.rowCellTitle}>
						Total Level: {character.character_level}
					</Text>
				</DefaultView>
			</DefaultView>
			<DefaultView>
				<DefaultView style={styles.rowView}>
					<Text style={styles.rowCell}>STR</Text>
					<Text style={styles.rowCell}>DEX</Text>
					<Text style={styles.rowCell}>CON</Text>
					<Text style={styles.rowCell}>INT</Text>
					<Text style={styles.rowCell}>WIS</Text>
					<Text style={styles.rowCell}>CHA</Text>
				</DefaultView>
				<DefaultView style={styles.rowView}>
					<Text style={styles.rowCell}>{character.strength}</Text>
					<Text style={styles.rowCell}>{character.dexterity}</Text>
					<Text style={styles.rowCell}>{character.constitution}</Text>
					<Text style={styles.rowCell}>{character.intellegence}</Text>
					<Text style={styles.rowCell}>{character.wisdom}</Text>
					<Text style={styles.rowCell}>{character.charisma}</Text>
				</DefaultView>
				<DefaultView style={styles.rowView}>
					<Text style={styles.rowCell}>{modifier(character.strength)}</Text>
					<Text style={styles.rowCell}>{modifier(character.dexterity)}</Text>
					<Text style={styles.rowCell}>{modifier(character.constitution)}</Text>
					<Text style={styles.rowCell}>{modifier(character.intellegence)}</Text>
					<Text style={styles.rowCell}>{modifier(character.wisdom)}</Text>
					<Text style={styles.rowCell}>{modifier(character.charisma)}</Text>
				</DefaultView>
				<Text>Character Bio: {character.bio}</Text>
				<Text>Character Backstory: {character.backstory}</Text>
				<Text>Character Traits: {character.character_traits}</Text>
			</DefaultView>
		</DefaultView>
	);
}

const styles = StyleSheet.create({
    centerWrapper:{
    	alignItems: 'center',
	justifyContent: 'center',
    },
    leftWrapper: {
    	justifyContent: 'flex-start',
    },
    text: {
        fontSize: 12,
        color: DarkHorizon.colors.text,
        marginVertical: 10,
    },
    rowView: {
	flexDirection: "row",
    },
    rowCellTitle:{
    	marginHorizontal: 10,
	font: 14,
	color: DarkHorizon.colors.text,
    },
    rowCell: {
	fontSize: 12,
	color: DarkHorizon.colors.text,
	marginHorizontal: 5,
    },
});
