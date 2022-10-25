import { Layout } from "@/components/Layout";
import { LayoutTitle } from "@/components/Layout/LayoutTitle";
import scss from "@/scss/components/Resume.module.scss";
import { useState } from "react";
import { IProps, IWork } from "@/interfaces/Resume.interface";

const works: IWork[] = [
  {
    id: 1,
    name: "CRO UX Analyst & Fullstack Developer",
    business: "HAVAS+ SAC",
    date: "(08/2021 - 04/2022)",
    activities: `<ul>
    <li>Implementar experimentos que ayudaron a incrementar la conversión de leads, para Movistar (<a href="https://www.movistar.com.pe/" target="_blank" rel="noopener">https://movistar.com.pe</a> ).</li>
    <li>Desarrollo de nuevas funcionalidades en la web pública de Movistar.</li>
    <li>Desarrollo de nuevas funcionalidades en el catálogo de Movistar ( <a href="https://catalogo.movistar.com.pe/" target="_blank" rel="noopener">https://catalogo.movistar.com.pe/</a> ).</li>
    <li>Mantenimiento a la aplicación ganadores de Movistar.</li>
    <li>Configuración de etiquetas con Google Tag Manager</li>
    <li>Intervenciones de ladings utilizando scripts GTM</li>
    <li>Creación de experimentos (A / B y otros), utilizando Google Optimize</li>
    <li>Tecnologías utilizadas: Javascript, CS3, Html5, Jquery, VueJs, Gulp, WebPack, GIT, GCP, Google Optimize, GTM y Hotjar</li>
  </ul>`,
  },
  {
    id: 2,
    name: "Frontend Developer",
    business: "SRBURNS PERÚ",
    date: "(01/2021 - 07/2021)",
    activities: `<ul>
    <li>Mejoras en la web de Entel Empresas, tanto Frontend como Backend ( <a href="https://www.entel.pe/empresas/" target="_blank" rel="noopener">https://www.entel.pe/empresas/</a> ).</li>
    <li>Desarrollo de Landings Pages, enfocado a la conversión de Leads</li>
    <li>Mantenimiento y creación de funcionalidades</li>
    <li>Tecnologías utilizadas: Javascript, CS3, Html5, Pug, Jquery, PHP, Wordpress, MySql, Gulp, WebPack, GIT</li>
  </ul>`,
  },
  {
    id: 3,
    name: "Web Developer",
    business: "IDEAS LATAM SAC",
    date: "(09/2020 - 01/2021)",
    activities: `<ul>
    <li>Creación de sistemas webs usando Wordpress</li>
    <li>Implementación de Google Tag Manager y Google Analytic en Webs y Landing Pages</li>
    <li>Tecnologías utilizadas: Javascript, CS3, Less, Booststrap, Html5, Jquery, PHP y Wordpress</li>
  </ul>`,
  },
  {
    id: 4,
    name: "Frontend Developer",
    business: "MEDIA IMPACT",
    date: "2017 - 2018",
    activities: `<ul>
    <li>Maquetación de sitios web</li>
    <li>Web responsive</li>
    <li>Mantenimiento de base de datos</li>
    <li>Tecnologías usadas: Javascript, CS3,Sass, Html5,Jquery, PHP, Laravel, MySql, VueJS, GIT</li>
  </ul>`,
  },
];

export const Resume: React.FC<IProps> = (props) => {
  const n = Math.ceil(works.length / 2);
  const col1: IWork[] = works.filter((w, index) => index + 1 <= n);
  const m = col1.length;
  const col2: IWork[] = works.filter((w, index) => index >= m);
  const [workCol1, setWorkCol1] = useState(col1);
  const [workCol2, setWorkCol2] = useState(col2);

  return (
    <Layout id="resume" layoutTitle={<LayoutTitle name="EXPERIENCIA" />}>
      <div className="row">
        <div className="col-12 col-lg-6">
          {workCol1.map((work: IWork) => (
            <div className={scss.ResumeItem} key={work.id}>
              <h3 className={scss.ResumeTitle}>{work.name}</h3>
              <h4 className={scss.ResumeBusiness}>{work.business}</h4>
              <h5 className={scss.ResumeDate}>{work.date}</h5>
              <div
                className={scss.ResumeParentlist}
                dangerouslySetInnerHTML={{ __html: work.activities }}
              />
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-6">
          {workCol2.map((work: IWork) => (
            <div className={scss.ResumeItem} key={work.id}>
              <h3 className={scss.ResumeTitle}>{work.name}</h3>
              <h4 className={scss.ResumeBusiness}>{work.business}</h4>
              <h5 className={scss.ResumeDate}>{work.date}</h5>
              <div
                className={scss.ResumeParentlist}
                dangerouslySetInnerHTML={{ __html: work.activities }}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
