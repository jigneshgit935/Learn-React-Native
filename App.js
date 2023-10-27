import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CourseListScreen from './Screens/CourseListScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'beside-icon',
          tabBarShowLabel: true,
          tabBarActiveTintColor: 'purple',
          tabBarInactiveTintColor: 'green',
        }}
      >
        <Tab.Screen
          name="Course List"
          component={CourseListScreen}
          options={{ headerTitleAlign: 'center' }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitleAlign: 'center',
            tabBarLabel: 'My Profile',
            tabBarBadge: 3,
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerTitleAlign: 'center' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
