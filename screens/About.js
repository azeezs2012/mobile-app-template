import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function About ({navigation}) {
    return(
        <View style={styles.container}>
            <Text>About Us</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});