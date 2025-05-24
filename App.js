import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import AddProductScreen from './screens/AddProductScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
          <Stack.Screen name='Login' options={{ headerShown: false }}>
            {(props) => (
              <LoginScreen {...props} onLogin={() => setIsLoggedIn(true)} />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name='Main' options={{ title: 'Lista zakupów' }}>
              {(props) => <MainScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name='AddProduct'
              options={{ title: 'Dodaj produkt' }}
            >
              {(props) => <AddProductScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name='ProductDetails'
              component={ProductDetailsScreen}
              options={{ title: 'Szczegóły produktu' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
