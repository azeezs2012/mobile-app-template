import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home ({navigation}) {
    return(
        <View style={styles.container}>
            <Button title='Go to Screen 2' onPress={()=>{navigation.navigate('Screen2')}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
});