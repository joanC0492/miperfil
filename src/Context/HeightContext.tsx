import { IProps, IContext } from "@/interfaces/HeightContext.interface";
import { createContext, useState } from "react";

const heightContext = createContext({} as IContext);

const HeightProvider: React.FC<IProps> = ({ children }) => {
  // const [heights, setHeights] = useState<IData[]>([]);
  const [elements, setElements] = useState<HTMLElement[]>([]);

  // const handleSetHeights = (h: IData): void =>
  //   setHeights((prev) => [...prev, h]);
  const handleSetElements = (el: HTMLElement): void =>
    setElements((prev) => [...prev, el]);

  return (
    <heightContext.Provider
      value={
        {
          elements,
          handleSetElements: (el: HTMLElement) => handleSetElements(el),
        } as IContext
      }>
      {children}
    </heightContext.Provider>
  );
};

export { heightContext, HeightProvider };
