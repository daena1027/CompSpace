// The App component is the entry point of the application. 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen'; // Import the HomeScreen 
import QuizScreen from './src/screens/QuizScreen';  // Import the QuizScreen 
import ResultsScreen from './src/screens/ResultsScreen'; // Import the ResultsScreen

const Stack = createStackNavigator();  // Create a stack navigator

export default function App() { 
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ); // Return the NavigationContainer component with the Stack.Navigator component as its child.
}
