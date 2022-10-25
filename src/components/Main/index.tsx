interface IProps {
  children: React.ReactNode;
}
const Main: React.FC<IProps> = ({ children }) => {
  return (
    <main id="main" className="Main">
      {children}
    </main>
  );
};

export { Main };
