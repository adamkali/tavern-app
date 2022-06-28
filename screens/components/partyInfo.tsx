// Create a party info component similar to the character details component in the characterInfo.tsx file
// Language: typescript
// Path: screens\components\partyInfo.tsx
// Compare this snippet from screens\components\characterInfo.tsx:

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

export default function PlotDetails({
    plot,
}: {
    plot: TavernProfileModels.Plot
}): JSX.Element {
    return (
        <DefaultView>
            <DefaultView style={styles.leftWrapper}>
                <DefaultView style={styles.rowView}>
                    <Text style={styles.rowCellTitle}>Plot:</Text>
                    <Text style={styles.rowCellTitle}>{plot.plot_name}</Text>
                </DefaultView>
                <DefaultView style={styles.rowView}>
                    <Text style={styles.rowCellTitle}> Plot Description: </Text>
                    <Scroll>
                        <Text style={styles.rowCell}>{plot.plot}</Text>
                    </Scroll>
                </DefaultView>
            </DefaultView>
        </DefaultView>
    )
}

const styles = StyleSheet.create({
    centerWrapper: {
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
        flexDirection: 'row',
    },
    rowCellTitle: {
        marginHorizontal: 10,
        font: 14,
        color: DarkHorizon.colors.text,
    },
    rowCell: {
        fontSize: 12,
        color: DarkHorizon.colors.text,
        marginHorizontal: 5,
    },
})
