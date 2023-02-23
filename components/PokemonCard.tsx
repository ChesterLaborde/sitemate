import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import { capitalize } from '../utils/functions';

type Props = {
    pokemon: { name: string, url: string };
    index: number;
    navigation: any;
}
const PokemonCard: React.FC<Props> = ({ index, pokemon, navigation }) => {

    const onPress = () => {
        navigation.push('Details', {
            url: pokemon.url,
            name: pokemon.name,
            index: index
        })
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.img} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}} />
            <Text>{capitalize(pokemon.name)}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        marginVertical: 10,
        marginHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 30, 
        height: 30,
        marginRight: 10
    }
});

export default PokemonCard;