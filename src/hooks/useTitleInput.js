import { useState, useEffect, useDebugValue } from 'react';

export default function useTitleInput(initalValue) {
  const [value, setValue] = useState(initalValue);
  useEffect(() => {
    document.title = value;
  });
  useDebugValue(value);

  return [value, setValue];
}
