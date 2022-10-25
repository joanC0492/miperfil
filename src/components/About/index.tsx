import "@/scss/components/About.scss";
import imgLaptop from "@/assets/profile-laptop.svg";
import { Habilidades } from "../Habilidades";
import { Layout } from "@/components/Layout";
import { LayoutTitle } from "../Layout/LayoutTitle";

export const About = () => {
  return (
    <Layout id="about">
      <LayoutTitle name="SOBRE MÍ">
        <p className="OpenSans-Medium mb-1">
          Hola ! Soy Joan, disfruto desarrollar sitios web implementando
          tecnologías eficientes y modernas.
        </p>
        <p>Una de mis mayores motivaciones es aprender.</p>
      </LayoutTitle>
      <div className="row">
        <div className="col-12 col-lg-4">
          <img
            src={imgLaptop}
            alt="developer activity"
            className="About__img"
          />
        </div>
        <div className="col-12 col-lg-8">
          <Habilidades />
        </div>
      </div>
    </Layout>
  );
};