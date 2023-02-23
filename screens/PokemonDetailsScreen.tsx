import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, Text, StyleSheet, Pressable } from 'react-native';
import PokemonStats from '../components/PokemonStats';
import { capitalize } from '../utils/functions';

type Props = {
    navigation: any;
    route: any
}

const PokemonDetailsScreen: React.FC<Props> = ({ navigation, route }) => {

    const [pokemon, setPokemon] = useState();
    const { url, name, index, dataFromSearch } = route.params;

    useEffect(() => {
        if (dataFromSearch) {
            setPokemon(dataFromSearch);
            return;
        }
        axios.get(url).then(res => {
            console.log('running');
            setPokemon(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);

    if (!pokemon) return;

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.back} onPress={() => navigation.navigate('Home')}>
                <Text>Back</Text>
            </Pressable>
            <Image resizeMode='contain' style={styles.img} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png` }} />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{capitalize(name)}</Text>
                <PokemonStats stats={pokemon.stats}/>
            </View>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        marginHorizontal: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        letterSpacing: 1.2
    },
    img: {
        width: '100%',
        height: 230
    },
    back: {
        height: 50,
        width: 50,
        position: 'absolute',
        top: 60,
        left: 24,
        backgroundColor: '#FFF',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    }
})

export default PokemonDetailsScreen;