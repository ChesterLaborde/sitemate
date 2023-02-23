import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Stat = ({ stat, baseStat }) => {
    return (
        <View style={styles.container}>
            <Text>{stat.name.toUpperCase()}</Text>
            <Text>{baseStat}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Stat;