import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Stat from './Stat';

const PokemonStats = ({ stats }) => {

    console.log(stats);
    return (
        <View style={styles.container}>
            <View style={styles.statRow}>
                <Stat baseStat={stats[0].base_stat} stat={stats[0].stat} />
                <Stat baseStat={stats[1].base_stat} stat={stats[1].stat} />
            </View>
            <View style={styles.statRow}>
                <Stat baseStat={stats[2].base_stat} stat={stats[2].stat} />
                <Stat baseStat={stats[3].base_stat} stat={stats[3].stat} />
            </View>
            <View style={styles.statRow}>
                <Stat baseStat={stats[4].base_stat} stat={stats[4].stat} />
                <Stat baseStat={stats[5].base_stat} stat={stats[5].stat} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        padding: 10,
        borderRadius: 10
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5
    }
})

export default PokemonStats;