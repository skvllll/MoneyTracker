import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import { Button } from '../../Atoms';

const Transaksi = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Add Transaction</Text>
        <Button
            label="Cash On Hand"
            backgroundColor="#02CF8E"
            textColor="#020202"
            navigation={navigation}
            toScreen="CashOnHand"
        />
        <Button
            label="Cash On Bank"
            backgroundColor="#02CF8E"
            textColor="#020202"
            navigation={navigation}
            toScreen="CashOnBank"
        />
        </View>
    );
};

export default Transaksi;

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: 'black',
    },
});