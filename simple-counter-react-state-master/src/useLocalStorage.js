import { useState, useEffect } from 'react';

function useLocalStorage(initialState, key) {
  function get() {
    const storage = localStorage.getItem(key);
    if (storage) return JSON.parse(storage).value;
    return initialState;
  }

  const [value, setValue] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ value }));
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
