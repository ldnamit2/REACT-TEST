import Petrol from './screens/Petrol';
import Rental from './screens/Rental';
import Food from './screens/Food';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import COLORS from './assets/colors/colors';
import { Entypo } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        style: style.tabBar,
        activeTintColor: COLORS.primary,
        tabBarShowLabel: false
       }}
    >
      <Tab.Screen name='Home' component={Home} options={{
        headerShown: false,
        tabBarIcon: () => <Icon name='home' size={40} color={COLORS.gray} />
      }}/>
      <Tab.Screen name='Notification' component={Petrol} options={{
        headerShown: false,
        tabBarIcon: () => <Icon name='notifications-none' size={32} color={COLORS.gray}/>
      }}/>
      <Tab.Screen name='Payment' component={Rental} options={{
        headerShown: false,
        tabBarIcon: () => <Icon name='payment' size={32} color={COLORS.gray}/>
      }}/>
      <Tab.Screen name='Profile' component={Food} options={{
        headerShown: false,
        tabBarIcon: () => <Icon name='person-outline' size={32} color={COLORS.gray}/>
      }}/>
    </Tab.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='TabNavigator' component={TabNavigator} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const style = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.white,
    
  }
})

export default App;
