import { StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SortIcon = ({ sort }) => {
  if (sort === 'a-z') {
    return (
      <MaterialCommunityIcons
        name='order-alphabetical-ascending'
        size={24}
        color='black'
      />
    );
  }
  if (sort === 'z-a') {
    return (
      <MaterialCommunityIcons
        name='order-alphabetical-descending'
        size={24}
        color='black'
      />
    );
  }
  if (sort === 'unordered') {
    return (
      <MaterialCommunityIcons
        name='reorder-horizontal'
        size={24}
        color='black'
      />
    );
  }
  return (
    <MaterialCommunityIcons
      name='order-bool-ascending-variant'
      size={24}
      color='black'
    />
  );
};

export const ProductSort = ({ sort, onPush }) => {
  return (
    <Pressable style={styles.order} onPress={onPush}>
      <SortIcon sort={sort} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  order: {
    verticalAlign: 'center',
    textAlign: 'center',
    paddingVertical: 24,
    paddingHorizontal: 8,
  },
});
