import { Text, SectionList } from 'react-native';

import { ProductListItem } from './ProductListItem';

export const GroupedProduct = ({ list, setBought, removeItem }) => {
  const groupedList = list.reduce((groups, item) => {
    const storeGroup = groups.find((section) => section.title === item.store);
    if (storeGroup) {
      storeGroup.data.push(item);
    } else {
      groups.push({ title: item.store, data: [item] });
    }
    return groups;
  }, []);

  return (
    <SectionList
      sections={groupedList}
      renderItem={({ item }) => (
        <ProductListItem
          item={item}
          onToggle={() => setBought(item)}
          onRemove={() => removeItem(item)}
        />
      )}
      renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
    />
  );
};
