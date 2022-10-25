interface IProps {
  children?: React.ReactNode;
}

interface IWork {
  id: number;
  name: string;
  business: string;
  date: string;
  activities: string;
}

export type { IProps, IWork };