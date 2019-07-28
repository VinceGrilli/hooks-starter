import { useState, useEffect } from 'react';

export default function useTitleInput(initalValue) {
  const [value, setValue] = useState(initalValue);
  useEffect(() => {
    document.title = value;
  });
  return [value, setValue];
}
