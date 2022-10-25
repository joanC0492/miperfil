interface INavItem {
  id: number;
  name: string;
  icon: string;
  hash: string;
  state?: boolean;
  handleActiveItem?: (id: number) => void;
}

export type { INavItem };
