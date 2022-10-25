import scss from "@/scss/components/LayoutTitle.module.scss";
interface Props {
  children?: React.ReactNode;
  name: string;
}

export const LayoutTitle: React.FC<Props> = ({ name, children }) => {
  return (
    <div className={`${scss.LayoutTitle} section-title text-center`}>
      <h2 className={scss.LayoutTitleTitle}>{name}</h2>
      {children}
    </div>
  );
};
