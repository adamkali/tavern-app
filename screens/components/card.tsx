import { useEffect, useState } from 'react'
import {
    Text,
    View as DefaultView,
    ScrollView as Scroll,
    StyleSheet,
    LogBox,
} from 'react-native'
import { Card, Button } from '@rneui/themed'

import * as TavernProfileModels from '../../helpers/models'
import { DarkHorizon } from '../../components/colorthemes'
import CharacterDetails from './characterInfo'
import PlotDetails from './partyInfo'

export default function UserCard({
    user,
    loaded,
}: {
    user: TavernProfileModels.User
    loaded: boolean
}): JSX.Element {
    // Set a the const entity to be the user object passed in from the parent
    // Should be set on load.
    const entity = user
    let characters: TavernProfileModels.Character[] =
        entity.user_characters ?? ([] as TavernProfileModels.Character[])
    let plots: TavernProfileModels.Plot[] =
        entity.user_plots ?? ([] as TavernProfileModels.Plot[])

    return (
        <DefaultView>
            {user.id !== (null || undefined) ? (
                <Card containerStyle={styles.cardContainer}>
                    <Card.Title style={styles.title}>
                        {entity.username}
                    </Card.Title>
                    <Card.Divider>
                        <Scroll>
                            <DefaultView style={styles.separator} />
                            <Text style={styles.text}>{entity.bio}</Text>
                            <Text style={styles.text}>Tags:</Text>
                            {entity.tags.split(', ').map((tag) => {
                                return <Text style={styles.text}>{tag}</Text>
                            })}
                            <Text style={styles.text}>
                                {entity.player_prefernce}
                            </Text>
                            <DefaultView style={styles.separator} />
                            <Text style={styles.title}>Characters</Text>
                            {
                                // Make a loop to iterate through the characters array if the character array is not empty
                                // If the character array is empty, do not display the characters section
                                // If the character array is not empty, display the characters section
                                // The characters section should use the CharacterDetails component

                                characters.length > 0 ? (
                                    characters.map((character) => {
                                        return (
                                            <CharacterDetails
                                                character={character}
                                            />
                                        )
                                    })
                                ) : (
                                    <Text style={styles.text}>
                                        This User has no Characters
                                    </Text>
                                )
                            }
                            <Text style={styles.title}>Plots</Text>
                            {
                                // Make a loop to iterate through the plots array if the plot array is not empty
                                // If the plot array is empty, do not display the plots section
                                // If the plot array is not empty, display the plots section
                                // The plots section should use the PlotDetails component

                                plots.length > 0 ? (
                                    plots.map((plot) => {
                                        return <PlotDetails plot={plot} />
                                    })
                                ) : (
                                    <Text style={styles.text}>
                                        This User has no Plots
                                    </Text>
                                )
                            }
                        </Scroll>
                    </Card.Divider>
                </Card>
            ) : (
                <Text>Uh oh something happened...</Text>
            )}
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
})
