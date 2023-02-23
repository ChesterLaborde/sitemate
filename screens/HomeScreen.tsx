import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, Pressable, Text } from 'react-native';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

const HomeScreen: React.FC = ({ navigation }) => {

    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50').then(res => {
            setPokemons(res.data.results);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const renderItem = ({ item, index }: {item: {name: string, url: string}, index: number}) => {
        return <PokemonCard index={index + 1} navigation={navigation} pokemon={item} />
    }

    const onPressSearch = () => {
        navigation.push('Search');
    }

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.searchBtn} onPress={onPressSearch}>
                <Text style={styles.searchTxt}>Search</Text>
            </Pressable>
            <FlatList 
                data={pokemons}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
        backgroundColor: '#4287f5',
        padding: 16,
        borderRadius: 10
    },
    searchTxt: {
        color: '#FFF'
    }
})

export default HomeScreen;