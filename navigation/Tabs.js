import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '../screens/Calendar';
import MucketList from '../screens/MucketList';
import Recommendation from '../screens/Recommendation';
import Search from '../screens/Search';
import { Text, View } from 'react-native';
import { useColorScheme } from 'react-native';
import { YELLOW_BASIC } from '../colors';
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return (
    <Tab.Navigator 
    initialRouteName="Calendar" 
    screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
          size: 24
        },
        tabBarIconStyle: {
          marginTop: 10
        },
        tabBarShowLabel : false, 
        tabBarActiveTintColor: YELLOW_BASIC,
        tabBarInactiveTintColor: "#808080",
        headerStyle: {
          backgroundColor: isDark ? "#1e272e" : "white",
        },
        headerTitleStyle: {
          fontSize: 20,
          color: isDark ? "white" : "#000000"
        },
        headerTitleAlign: 'left'
    }}>
        <Tab.Screen 
        name="다이어리" 
        component={Calendar}
        options={{ 
          tabBarIcon: ({focused, color, size}) => {
            return <Ionicons 
              name= {focused ? "book" : 'book-outline'}
              color = {color} 
              size = {size} />
          },
            headerRight: () => (
            <View>
                <Text>tmp</Text>
            </View>
            ),
        }}
        />
        <Tab.Screen name="먹킷리스트" component={MucketList} />
        <Tab.Screen name="음식 추천" component={Recommendation} />
        <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
)};

export default Tabs;