interface IProps {
  children: React.ReactNode;
}
// interface IData {
//   id: string;
//   offsetTop: number;
// }
interface IContext {
  // heights: Array<IData>;
  // handleSetHeights: (h: IData) => void;
  elements: Array<HTMLElement>;
  handleSetElements: (element: HTMLElement) => void;
}

// export type { IProps, IData, IContext };
export type { IProps, IContext };
