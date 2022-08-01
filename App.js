import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Time from './BottomBarScreen/Time';
import List from './BottomBarScreen/List';
import Alert from './BottomBarScreen/Alert';
import HomePage from './components/HomePage';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          activeColor="#fff"
          barStyle={{ backgroundColor: '#232323', height: 65 }}
          labeled={false}
        >
          <Tab.Screen
            name="Feed"
            component={HomePage}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, focused }) => (
                focused ? (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ) : (
                  <MaterialCommunityIcons name="home-outline" color={color} size={25} />
                )
              ),
            }}
          />
          <Tab.Screen
            name="Time"
            component={Time}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, focused }) => (
                focused ? (
                  <Ionicons name="timer" color={color} size={25} />
                ) : (
                  <Ionicons name="timer-outline" color={color} size={25} />
                )
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={List}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color, focused }) => (
                focused ? (
                  <Ionicons name="list" color={color} size={25} />
                ) : (
                  <Ionicons name="list-outline" color={color} size={25} />
                )
              ),
            }}
          />
          <Tab.Screen
            name="Alert"
            component={Alert}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({ color, focused }) => (
                focused ? (
                  <Ionicons name="notifications" color={color} size={25} />
                ) : (
                  <Ionicons name="notifications-outline" color={color} size={25} />
                )
              ),
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

