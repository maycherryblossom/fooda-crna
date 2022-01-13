import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '../screens/Calendar';
import MucketList from '../screens/MucketList';
import Recommendation from '../screens/Recommendation';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const Tabs = () => (
<Tab.Navigator>
    <Tab.Screen name="Calendar" component={Calendar} />
    <Tab.Screen name="MucketList" component={MucketList} />
    <Tab.Screen name="Recommendation" component={Recommendation} />
    <Tab.Screen name="Search" component={Search} />
</Tab.Navigator>
);

export default Tabs;