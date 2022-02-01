import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calendar from '../screens/Calendar';
import MucketList from '../screens/MucketList';
import Recommendation from '../screens/Recommendation';
import Search from '../screens/Search';
import { Text, View, SafeAreaView, Modal} from 'react-native';
import { useColorScheme } from 'react-native';
import { YELLOW_BASIC } from '../colors';
import { AntDesign } from "@expo/vector-icons";
import Home from '../screens/Home';
import WriteDiary from '../screens/WriteDiary';
import WriteDiaryModal from '../components/WriteDiaryModal';
import SearchStack from './SearchStack';
import RecommendationStack from './RecommendationStack';
import MucketListStack from './MucketListStack';
import CalendarStack from './CalendarStack';

const Tab = createBottomTabNavigator();

const Write  = () => null

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
        component={CalendarStack}
        options={{ 
          tabBarIcon: ({focused, color, size}) => {
            return <AntDesign
              name= {focused ? "home" : 'home'}
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
        <Tab.Screen 
        name="먹킷리스트" 
        component={MucketListStack}
        options={{ 
          tabBarIcon: ({focused, color, size}) => {
            return <AntDesign 
              name= {focused ? "bars" : 'bars'}
              color = {color} 
              size = {size} 
            />
          },
            headerRight: () => (
            <SafeAreaView>
                <Text>profile</Text>
            </SafeAreaView>
            ),
        }}
        />
        <Tab.Screen 
          name="다이어리 작성" 
          component={Write}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              navigation.navigate(`WriteDiaryModal${navigation.getState().index}`)
            }
          })}
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <AntDesign 
                name= {focused ? "pluscircleo" : 'pluscircleo'}
                color = {color} 
                size = {size} 
              />
            },
              headerRight: () => (
              <SafeAreaView>
                  <Text>profile</Text>
              </SafeAreaView>
              ),           
          }}
          />
        <Tab.Screen 
          name="음식 추천" 
          component={RecommendationStack} 
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <AntDesign 
                name= {focused ? "like2" : 'like2'}
                color = {color} 
                size = {size} 
              />
            },
              headerRight: () => (
              <SafeAreaView>
                  <Text>profile</Text>
              </SafeAreaView>
              ),           
            }}                      
          />
        <Tab.Screen 
          name="SearchStack" 
          component={SearchStack} 
          options={{
            tabBarIcon: ({focused, color, size}) => {
              return <AntDesign 
                name= {focused ? "search1" : 'search1'}
                color = {color} 
                size = {size} 
              />
            },
              headerRight: () => (
              <SafeAreaView>
                  <Text>profile</Text>
              </SafeAreaView>
              ),               
            }}
          />
    </Tab.Navigator>
)};

export default Tabs;