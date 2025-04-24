import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export const AddProductForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [store, setStore] = useState('');

  const handleAdd = () => {
    onAdd({ name, price: parseFloat(price), store });
    setName('');
    setPrice('');
    setStore('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder='Nazwa produktu'
      />
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
        placeholder='Cena'
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        value={store}
        onChangeText={setStore}
        placeholder='Nazwa sklepu'
      />
      <Button title='Dodaj produkt' onPress={handleAdd} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 8,
    padding: 8,
  },
});
