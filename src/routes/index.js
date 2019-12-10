import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';;
import {createStackNavigator} from 'react-navigation-stack';
import People from '../components/screens/People';
import PeopleDetail from '../components/screens/PeopleDetail';



const AppNavigation = createStackNavigator(
	{
		People: {
			screen: People,
			navigationOptions: {
			},
		},
		PeopleDetail: {
			screen: PeopleDetail,
			navigationOptions: {
				header: null
			},
		},
	},
	{
		initialRouteName: 'People',
		defaultNavigationOptions: {
			headerStyle: {
				marginBottom: 0,
				backgroundColor: '#278ff7',
			},
		},
	}
);
	



export default createAppContainer(AppNavigation);
