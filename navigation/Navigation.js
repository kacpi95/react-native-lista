import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddProductScreen from '../screens/AddProductScreen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name='Main'
          options={{ title: 'Lista zakupów' }}
          component={MainScreen}
        />
        <Stack.Screen
          name='AddProduct'
          options={{ title: 'Dodaj produkt' }}
          component={AddProductScreen}
        />
        <Stack.Screen
          name='ProductDetails'
          options={{ title: 'Szczegóły produktu' }}
          component={ProductDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
