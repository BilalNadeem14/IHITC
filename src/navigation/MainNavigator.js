import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {connect} from 'react-redux'
import AuthStackNavigator from './AuthStackNavigator'
import HomeStackNavigator from './HomeStackNavigator'
import {createStackNavigator} from '@react-navigation/stack'
// import DrawerNavigator from './DrawerNavigator'

// import HomeTabNavigator from './HomeTabNavigator';

const RootStack = createStackNavigator()

const RootStackNavigator = (props) => {
    const {loggedIn} = props
    // const loggedIn = true
    return loggedIn?(// //<Text>Hey</Text>
        <RootStack.Navigator
            // headerMode="none"
            screenOptions={{headerShown: false}}
            initialRouteName={'AuthStackNavigator'}
        >
            <RootStack.Screen
                name="AuthStackNavigator"
                component={AuthStackNavigator}
            />
            {/* <RootStack.Screen
                name="HomeStack"
                component={HomeStackNavigator}
            /> */}
            {/* <RootStack.Screen 
                name='DrawerNavigator' //HomeTabNavigator
                component={DrawerNavigator}
            /> */}
        </RootStack.Navigator>
    ): ( //null
        <RootStack.Navigator
            // headerMode="none"
            screenOptions={{headerShown: false}}
            initialRouteName={'HomeStack'}
        >
            <RootStack.Screen
                name="HomeStack"
                component={HomeStackNavigator}
            />
            {/* <RootStack.Screen 
                name='DrawerNavigator' //HomeTabNavigator
                // component={DrawerNavigator}
            /> */}
        </RootStack.Navigator>
    )
}

const mapStateToProps = (state) =>{
    console.log('state?.authReducer?.loggedIn: ', state?.authReducer?.loggedIn);
    return {
        loggedIn: state?.authReducer?.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(RootStackNavigator)