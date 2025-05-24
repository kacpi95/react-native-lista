import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export default function MainScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = [
          {
            id: '1',
            name: 'Chleb',
            price: 3,
            store: 'Biedronka',
            description: 'chleb',
            image:
              'https://images.unsplash.com/photo-https://images.unsplash.com/photo-1608198093002-ad4e005484e9?w=800&h=600&auto=format-ad4e005484e9',
          },
          {
            id: '2',
            name: 'Mleko',
            price: 2,
            store: 'Lidl',
            description: 'Mleko',
            image: '',
          },
        ];
        setProducts(data);
        setLoading(false);
      } catch (e) {
        setError('Błąd podczas pobierania produktów');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const onAdd = (product) => {
    setProducts((prev) => [product, ...prev]);
  };

  const goToAddProduct = () => navigation.navigate('AddProduct', { onAdd });

  const goToDetails = (product) =>
    navigation.navigate('ProductDetails', { product });

  if (loading)
    return (
      <SafeAreaView style={styles.center}>
        <ActivityIndicator size='large' />
      </SafeAreaView>
    );

  if (error)
    return (
      <SafeAreaView style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Button title='Dodaj produkt' onPress={goToAddProduct} />
      {products.length === 0 ? (
        <Text style={styles.emptyText}>Brak produktów na liście</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => goToDetails(item)}
              style={styles.item}
            >
              <Text style={styles.itemText}>
                {item.name} - {item.price.toFixed(2)}zł ({item.store})
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  emptyText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
