import { useEffect, useState } from 'react'
import {
    Text,
    View as DefaultView,
    ScrollView as Scroll,
    StyleSheet,
} from 'react-native'
import { Card, Button } from '@rneui/themed'

import * as TavernProfileModels from '../helpers/models'
import TavernProfileClient from '../helpers/services/TavernClient'
import UserCard from './components/card'
import { PaperPen, DarkHorizon } from '../components/colorthemes'
import { RootTabScreenProps } from '../types'

export default function TabOneScreen({
    navigation,
}: RootTabScreenProps<'TabOne'>) {
    const [user, setUser] = useState({} as TavernProfileModels.User)
    const [errorMessage, setErrorMessage] = useState('')
    const [loaded, setLoaded] = useState(false)

    const profileClient: TavernProfileClient = new TavernProfileClient()

    // Make a useEffect to fetch the user data
    // then set the user state to the fetched data
    // this will use a api call using TavernProfileClient.getUserById
    useEffect(() => {
        async function fetchUser() {
            try {
                const user = await profileClient
                    .getUserById({
                        userId: '003602aad07868e0b19e19351cdb7e59',
                    })
                    .then(async (response) => {
                        if (response.successful && response.data) {
                            return response.data
                        } else {
                            setErrorMessage(response.message)
                            return null
                        }
                        return response.data
                    })
                    .then((data) => {
                        if (data) {
                            console.log(data)
                            setUser(data)
                            setLoaded(true)
                        }
                    })
                    .catch((error) => {
                        setErrorMessage(error.message)
                    })
            } catch (error) {
                setErrorMessage(
                    'An Error occurred while fetching the user data'
                )
            }
        }
        fetchUser()
    }, [])

    return (
        <DefaultView style={styles.styleContainer}>
            <Text style={styles.title}>Tavern</Text>
            <UserCard user={user} loaded={loaded} />
            <Text style={styles.text}>{errorMessage}</Text>
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
    },
    styleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DarkHorizon.colors.background,
        color: DarkHorizon.colors.text,
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
        color: DarkHorizon.colors.text,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
