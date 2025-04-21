import { useState } from 'react';

const sorts = ['normal', 'a-z', 'z-a', 'unordered'];

const doSort = (list, method) => {
  switch (method) {
    case 'a-z':
      return list.slice().sort((a, b) => a.name.localeCompare(b.name));
    case 'z-a':
      return list.slice().sort((a, b) => b.name.localeCompare(a.name));
    case 'unordered':
      return list;
    default:
      return list.sort((_, b) => (b.bought ? -1 : 1));
  }
};

export const useList = (defaultValue) => {
  const [list, updateList] = useState(defaultValue);
  const [currentSort, setSort] = useState(sorts[0]);

  const addItem = ({ name, price, store }) => {
    updateList((current) => [
      {
        name,
        price,
        store,
        bought: false,
      },
      ...current,
    ]);
  };
  const setBought = (name) => {
    updateList((current) =>
      current.map((item) =>
        item.name === name.name ? { ...item, bought: !item.bought } : item
      )
    );
  };
  const removeBought = () => {
    updateList((current) => current.filter((item) => !item.bought));
  };

  const toggleSort = () => {
    setSort(sorts[(sorts.indexOf(currentSort) + 1) % sorts.length]);
  };
  const removeItem = (itemToRemove) => {
    updateList((current) =>
      current.filter((item) => item.name !== itemToRemove.name)
    );
  };

  return {
    list: doSort(list, currentSort),
    addItem,
    setBought,
    removeBought,
    currentSort,
    toggleSort,
    removeItem,
  };
};
