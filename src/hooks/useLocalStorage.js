import React, { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // Will print every letter we typed into the input box
    console.log(value);

    // Check if value is a function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    // Set to state
    setLocalStorageValue(value);
    // Set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
};

// Get local storage by key, if not found, pass back initialValue
const getLocalStorageValue = (key, initialValue) => {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? itemFromStorage : initialValue;
};
export default useLocalStorage;
