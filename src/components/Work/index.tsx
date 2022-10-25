interface Props {
  children?: React.ReactNode;
}

export const Work: React.FC<Props> = (props) => {
  return <ul className="Work">{props.children}</ul>;
};
