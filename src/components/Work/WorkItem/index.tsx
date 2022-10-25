interface Props {
  children?: React.ReactNode;
  item: string;
}

export const WorkItem: React.FC<Props> = (props) => {
  return (
    <li
      className="Work__item"
      dangerouslySetInnerHTML={{ __html: props.item }}
    />
  );
};
