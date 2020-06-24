import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import About from '../screens/About';
import Header from '../shared/Header';

const screens = {
    About:{
        screen: About,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation}  title='About Us'/>
            }
        }
    },
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'#999'}
    }
});

export default AboutStack;