import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
// import { getOptions } from './navigationOptions';

// import Signup from '../screens/Signup';
import ListOfTestResults from '../screens/ListOfTestResults'
import ResultDetails from '../screens/ResultDetails'
// import Search from '../screens/Search'
// import AddClient from '../screens/AddClient'
// import SearchDetails from '../screens/SearchDetails'
// import AddNewVisit from '../screens/AddNewVisit'
// import PendingRequestScreen from '../screens/PendingRequestScreen';
// import PasswordRecovery from '../screens/PasswordRecovery';

const HomeStack = createStackNavigator()

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            // screenOptions={getOptions}
            screenOptions={{ headerShown: false }}
            initialRouteName="ListOfTestResults"
        >
            <HomeStack.Screen
                name='ListOfTestResults'
                component={ListOfTestResults}
            />
            <HomeStack.Screen
                name='ResultDetails'
                component={ResultDetails}
            />
            {/* <HomeStack.Screen
                name='PendingRequestScreen'
                component={PendingRequestScreen}
            />
            <HomeStack.Screen
                name='Search'
                component={Search}
            />
            <HomeStack.Screen
                name='AddClient'
                component={AddClient}
            />
            <HomeStack.Screen
                name='SearchDetails'
                component={SearchDetails}
            />
            <HomeStack.Screen
                name='AddNewVisit'
                component={AddNewVisit}
            /> */}
            {/* <HomeStack.Screen
                name="PasswordRecovery"
                component={PasswordRecovery}
            />
            <HomeStack.Screen
                name='Signup'
                component={Signup}
            /> */}
        </HomeStack.Navigator>
    )
}

export default HomeStackNavigator