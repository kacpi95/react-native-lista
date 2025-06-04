import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@products';

export default function MainScreen({ navigation }) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored !== null) {
          setProducts(JSON.parse(stored));
        } else {
          const defaultProducts = [
            { id: '1', name: 'Chleb', price: 3, store: 'Biedronka' },
            { id: '2', name: 'Mleko', price: 2, store: 'Lidl' },
          ];
          setProducts(defaultProducts);
          await AsyncStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(defaultProducts)
          );
        }
      } catch (e) {
        setError('Błąd podczas ładowania danych');
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  const onAdd = async (product) => {
    try {
      const updated = [product, ...(products || [])];
      setProducts(updated);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      setError('Błąd zapisu produktu');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          <Button
            title='Dodaj produkt'
            onPress={() => navigation.navigate('AddProduct', { onAdd })}
          />

          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', { product: item })
                }
                style={styles.item}
              >
                <Text style={styles.itemText}>
                  {item.name} - {item.price.toFixed(2)}zł ({item.store})
                </Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  item: {
    backgroundColor: '#ecf0f1',
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
  },
  itemText: {
    fontSize: 16,
  },

  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
