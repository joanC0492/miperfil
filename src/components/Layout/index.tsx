import { heightContext } from "@/Context/HeightContext";
import scss from "@/scss/components/Layout.module.scss";
import { useContext, useEffect, useRef } from "react";
interface Props {
  id: string;
  children?: React.ReactNode;
  layoutTitle?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children, id, layoutTitle }) => {
  const { handleSetElements } = useContext(heightContext);
  const refLayaout = useRef<HTMLElement>(null);

  useEffect(() => {
    const { current } = refLayaout;
    handleSetElements(current!);
  }, []);

  return (
    <section
      ref={refLayaout}
      id={id}
      className={`${scss.LayoutSection} d-lg-flex align-items-lg-center flex-lg-wrap`}>
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        {layoutTitle}
        {children}
      </div>
    </section>
  );
};
