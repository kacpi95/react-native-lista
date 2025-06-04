import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';

export default function ProductDetailsScreen({ route }) {
  const { product } = route.params || {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price.toFixed(2)} zł</Text>
      <Text style={styles.store}>Sklep: {product.store}</Text>
      <Text style={styles.description}>
        {product.description || 'Brak opisu'}
      </Text>
      {product.image ? (
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode='contain'
        />
      ) : (
        <Text style={styles.noImageText}>Brak zdjęcia produktu</Text>
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
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    marginVertical: 8,
  },
  store: {
    fontSize: 16,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  noImageText: {
    marginTop: 10,
    fontStyle: 'italic',
    color: '#888',
  },
});
