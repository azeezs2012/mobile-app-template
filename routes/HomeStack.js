import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import Screen2 from '../screens/Screen2';
import Header from '../shared/Header';
import React from 'react';

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='Home'/>
            }
        }
    },
    Screen2:{
        screen: Screen2,
        navigationOptions: {
            title: 'Screen 2..',
        }
    }
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor:'white',
        headerStyle:{backgroundColor:'#999'}
    }
});

export default HomeStack;