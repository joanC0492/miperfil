import { useEffect, useLayoutEffect, useState } from "react";

interface IuseLocalStorage {
  item: Record<string, any>;
  handleItem: (item: Record<string, any>) => void;
}

export const useLocalStorage = (
  nameInitial: string,
  valueInitial: Record<string, any>
): IuseLocalStorage => {
  const [item, setItem] = useState(valueInitial);

  const handleItem = (item: Record<string, any>): void => {
    localStorage.setItem(nameInitial, JSON.stringify(item));
    setItem(item);
  };

  useLayoutEffect(() => {
    const localItem = localStorage.getItem(nameInitial);
    let temp;
    if (!!localItem) {
      temp = JSON.parse(localItem);
    } else {
      temp = valueInitial;
      localStorage.setItem(nameInitial, JSON.stringify(temp));
    }
    setItem(temp);
  }, []);

  return {
    item,
    handleItem: (item: Record<string, any>) => handleItem(item),
  };
};
