import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerTitleAlign: 'center' }}
          initialParams={{
            name: 'Guest',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
