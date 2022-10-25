import imgProfileDesk from "@/assets/profile-desktop.svg";
import cv from "@/assets/cvcochachi-2022.pdf";
import { Rrss } from "@/components/Rrss";
import { Button } from "@/components/Button";
import { useContext, useEffect, useRef } from "react";
import Typed from "typed.js";
import scss from "@/scss/components/Hero.module.scss";
import { heightContext } from "@/Context/HeightContext";
import AOS from "aos";
import "aos/dist/aos.css";

interface IProps {
  children?: React.ReactNode;
}

export const Hero: React.FC<IProps> = () => {
  const refTyped = useRef<HTMLElement>(null);
  const refHero = useRef<HTMLElement>(null);
  const { handleSetElements } = useContext(heightContext);

  let typed: Typed;
  useEffect(() => {
    const options = {
      strings: ["Front End Developer", "Freelancer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };
    typed = new Typed(refTyped.current!, options);

    // Scrollspy
    const { current } = refHero;
    handleSetElements(current!);

    AOS.init();

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className={scss.Hero} ref={refHero}>
      <div
        className={`text-center align-self-center text-lg-start container-lg`}>
        <div data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000">
          <h1 className={scss.HeroTitle}>Joan Cochachi</h1>
          <div className={scss.HeroTypewriter}>
            <span ref={refTyped} />
          </div>
          <div className="mt-4">
            <Rrss />
          </div>
          <div className="mt-4">
            <div className="mx-auto mx-lg-0">
              <Button link={cv} text="DESCARGA MI CV" />
            </div>
          </div>
        </div>
        <div className={scss.HeroFigure}>
          <img
            className={scss.HeroImg}
            src={imgProfileDesk}
            alt="imgProfileDesk"
          />
        </div>
      </div>
    </section>
  );
};
