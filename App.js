import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';

import { GroupedProduct } from './components/GroupedProduct';
import { AddProductForm } from './components/AddProductForm';
import { ProductSort } from './components/ProductSort';
import { UseProductList } from './components/UseProductList';

export default function App() {
  const {
    list,
    addItem,
    setBought,
    removeBought,
    currentSort,
    toggleSort,
    removeItem,
  } = UseProductList([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.brand}>Lista zakupów</Text>
        {list.length > 0 && (
          <ProductSort sort={currentSort} onPush={toggleSort} />
        )}
      </View>
      <GroupedProduct
        list={list}
        setBought={setBought}
        removeItem={removeItem}
      />
      {list.length > 0 && (
        <Button title='usuń kupione' onPress={removeBought} color='#000' />
      )}
      <AddProductForm onAdd={addItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  brand: {
    margin: 24,
    fontSize: 18,
    width: '80%',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingStart: 50,
  },
});
