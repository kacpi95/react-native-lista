// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from '../screens/LoginScreen';
// import ProductDetailsScreen from '../screens/ProductDetailsScreen';
// import ProductListScreen from '../screens/ProductListScreen';
// import { AuthContext } from '../context/AuthContext';
// import { useContext } from 'react';

// const stack = createNativeStackNavigator();

// export default function AppNavigator() {
//   const { isLoggedIn } = useContext(AuthContext);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {!isLoggedIn ? (
//           <Stack.Screen
//             name='Login'
//             component={LoginScreen}
//             options={{ headerShown: false }}
//           />
//         ) : (
//           <>
//             <Stack.Screen name='Home' component={HomeScreen} />
//             <Stack.Screen name='AddProduct' component={ProductListScreen} />
//             <Stack.Screen
//               name='ProductDetails'
//               component={ProductDetailsScreen}
//             />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
