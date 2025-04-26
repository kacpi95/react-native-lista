import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const ProductListItem = ({ item, onToggle, onRemove }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.textContainer}>
        <Text style={[styles.item, item.bought && styles.itemBought]}>
          {item.name} - {item.price.toFixed(2)}zł ({item.store})
        </Text>
        <Feather
          name={item.bought ? 'check-square' : 'square'}
          size={24}
          color='black'
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onRemove} style={styles.iconButton}>
        <Feather name='trash-2' size={24} color='red' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  item: {
    flex: 1,
    fontSize: 14,
  },
  itemBought: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  iconButton: {
    paddingLeft: 8,
  },
});
