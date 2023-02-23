import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = ({ navigation }) => {

    const [query, setQuery] = useState<string>('');
    const [searches, setSearches] = useState();
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
        AsyncStorage.getItem('@searches').then(res => {
            if (res) {
                setSearches(JSON.parse(res));
            }
        })
    }, [searches]);

    const onChangeText = (text: string) => {
        setShowError(false);
        setQuery(text);
    }

    const onPress = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
        try {
            let previousSeraches: any = await AsyncStorage.getItem('@searches');
            if (!previousSeraches) {
                previousSeraches = [];
            } else {
                previousSeraches = JSON.parse(previousSeraches);
            }
            previousSeraches.push(query.toLocaleLowerCase());
            await AsyncStorage.setItem('@searches', JSON.stringify(previousSeraches));
            let res = await axios.get(url);
            setShowError(false);
            navigation.push('Details', {
                index: res.data.id,
                name: res.data.species.name,
                dataFromSearch: res.data
            })
        } catch (e) {
            console.log(e);
            setShowError(true);
        }

    }

    const renderItem = ({ item }: {item: string}) => {
        return (
            <Text>{item}</Text>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.searchRow}>
                    <TextInput onChangeText={(text) => onChangeText(text)} placeholder='Search...' style={styles.txtInput} />
                    <Pressable style={[styles.btn, showError ? styles.error : null]} onPress={onPress}>
                        <Text style={styles.txt}>{showError? 'Error' : 'Search'}</Text>
                    </Pressable>
                </View>
                <Text style={styles.title}>Recenet Searches</Text>
                <FlatList 
                    data={searches}
                    renderItem={renderItem}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24
    },
    searchRow: {
        flexDirection: 'row'
    },
    txtInput: {
        flex: 5,
        backgroundColor: '#FAFAFA',
        padding: 10
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4287f5',
        borderRadius: 10,
        flex: 2,
        marginLeft: 10
    },
    txt: {
        color: '#FFF'
    },
    error: {
        backgroundColor: 'red'
    },
    title: {
        fontSize: 26,
        marginTop: 10,
        fontWeight: 'bold'
    }
})

export default SearchScreen;