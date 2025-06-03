import { useState } from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from 'react-native';

export default function AddProductScreen({ navigation, route }) {
  const { onAdd } = route.params || {};

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [store, setStore] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    if (!name || !price || !store) {
      Alert.alert('Proszę wypełnić nazwę, cenę i sklep');
      return;
    }

    const newProduct = {
      id: Date.now().toString(),
      name,
      price: parseFloat(price),
      store,
      description,
      image,
    };

    if (typeof onAdd === 'function') {
      onAdd(newProduct);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder='Nazwa produktu'
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder='Cena'
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        keyboardType='numeric'
      />
      <TextInput
        placeholder='Sklep'
        style={styles.input}
        value={store}
        onChangeText={setStore}
      />
      <TextInput
        placeholder='Opis (opcjonalnie)'
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder='URL zdjęcia (opcjonalnie)'
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />
      <Button title='Dodaj produkt' onPress={handleAdd} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginVertical: 8,
    padding: 10,
  },
});
