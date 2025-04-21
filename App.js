import { Text, SafeAreaView, StyleSheet, Button, View } from 'react-native';

import { ProductsList } from './components/ProductsList';
import { ProductInput } from './components/ProductInput';
import { SortButton } from './components/SortButton';
import { useList } from './components/UseList';

export default function App() {
  const {
    list,
    addItem,
    setBought,
    removeBought,
    currentSort,
    toggleSort,
    removeItem,
  } = useList([]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.brand}>Lista zakupów</Text>
        {list.length > 0 && (
          <SortButton sort={currentSort} onPush={toggleSort} />
        )}
      </View>
      <ProductsList list={list} setBought={setBought} removeItem={removeItem} />
      {list.length > 0 && (
        <Button title='usuń kupione' onPress={removeBought} color='#000' />
      )}
      <ProductInput onAdd={addItem} />
    </SafeAreaView>
  );
}

