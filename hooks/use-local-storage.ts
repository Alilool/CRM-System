"use client";

import { useState } from "react";

function useLocalStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return defaultValue;
    }

    const savedValue = localStorage.getItem(key);

    if (!savedValue) {
      return defaultValue;
    }

    return JSON.parse(savedValue) as T;
  });

  function saveValue(nextValue: T) {
    setValue(nextValue);
    localStorage.setItem(key, JSON.stringify(nextValue));
  }

  return [value, saveValue] as const;
}

export { useLocalStorage };
