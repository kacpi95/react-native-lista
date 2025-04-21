import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export const ListItem = ({ item, onToggle, onRemove }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.container}>
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
