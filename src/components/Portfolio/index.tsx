import { Layout } from "../Layout";
import { LayoutTitle } from "../Layout/LayoutTitle";
import { ModalJc } from "../ModalJc";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Button } from "../Button";
import { IWorkCard } from "@/interfaces/workCards.interface";
import "@/scss/components/Portfolio.scss";

const workCards: IWorkCard[] = [
  {
    id: 1,
    title: "Entel Empresas",
    skills: "WORDPRESS | HTML | PUG | CSS | SCSS | JS",
    img: `project-entel-empresas`,
    link: "https://www.entel.pe/empresas/",
    description: ``,
  },
  {
    id: 2,
    title: "Movistar",
    skills: "HTML | CSS | JS | GA | OPTIMIZE | GTM",
    img: `project-movistar`,
    link: "https://www.movistar.com.pe/",
    description: ``,
  },
  {
    id: 3,
    title: "Personal | Cineplanet",
    skills: "HTML | CSS | REACT",
    img: `project-cineplanet`,
    link: "https://joancochachi.com/cineplanet/",
    description: ``,
  },
  {
    id: 4,
    title: "Exsa",
    skills: "LARAVEL | HTML | CSS | JS",
    img: `project-exsa`,
    link: "https://exsa.net/es",
    description: ``,
  },
  {
    id: 5,
    title: "Infopesa",
    skills: "LARAVEL | HTML | CSS | JS | VUE",
    img: `project-infopesa`,
    link: "https://infopesa.com/",
    description: ``,
  },
  {
    id: 6,
    title: "Innovación Digital",
    skills: "WORDPRESS | HTML | CSS | JS",
    img: `project-innovacion-digital`,
    link: "https://www.entel.pe/empresas/",
    description: ``,
  },
];

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [stateModal, setStateModal] = useState({
    id: 0,
    title: "",
    skills: "",
    img: "",
    link: "",
    description: "",
  });

  const handleOpenModal = ({
    id,
    title,
    skills,
    img,
    link,
    description,
  }: IWorkCard) => {
    setStateModal((prev) => ({
      ...prev,
      id,
      title,
      skills,
      img,
      link,
      description,
    }));
    setShowModal(true);
    document.querySelector("html")!.classList.add("disabled");
  };
  const handlePrevModal = () => {
    const totalWorkCards: number = workCards.length;
    let index: number = stateModal.id - 2;
    if (index <= 0) index = totalWorkCards - 1;
    setStateModal({ ...workCards[index] });
  };
  const handleNextModal = () => {
    const totalWorkCards: number = workCards.length;
    let index: number = stateModal.id;
    if (index >= totalWorkCards) index = 0;
    setStateModal({ ...workCards[index] });
  };
  
  return (
    <Layout id="portfolio">
      <LayoutTitle name="PORTAFOLIO">
        <p>ALGUNAS COSAS QUE HE CONSTRUIDO</p>
      </LayoutTitle>
      <div className="row text-center">
        {workCards.map((w: IWorkCard) => (
          <div className="col-md-6 col-lg-4" key={w.id}>
            <div className="Portfolio__wrap">
              <img
                src={`/src/assets/projects/${w.img}-min.jpg`}
                className="Portfolio__img"
                alt="Entel Empresas"
                loading="lazy"
              />
              <div className="Portfolio__info">
                <div>
                  <h4 className="Portfolio__title">{w.title}</h4>
                  <p className="Portfolio__skills">{w.skills}</p>
                  <div className="Portfolio__links">
                    <button
                      className="Portfolio__icon-parent Portfolio__icon-parent--btn"
                      onClick={() => {
                        handleOpenModal({ ...w });
                      }}>
                      <Icon icon={`bx-plus`} className="Portfolio__icon" />
                    </button>
                    <a
                      target="_blank"
                      href={w.link}
                      title={w.title}
                      className="Portfolio__icon-parent">
                      <Icon icon={`bx:link`} className="Portfolio__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <ModalJc setShowModal={setShowModal}>
          <div className="row justify-content-lg-center ModalJc__row">
            <div className="col-lg-6">
              <div className="ModalJc__figure">
                <img
                  src={`/src/assets/projects/${stateModal.img}.png`}
                  alt={stateModal.title}
                  className="ModalJc__img"
                />
              </div>
            </div>
            <div className="col-lg-6 mt-2">
              <p className="ModalJc__skills">{stateModal.skills}</p>
              <p className="ModalJc__title">{stateModal.title}</p>
              <p className="ModalJc__txt">{stateModal?.description}</p>
              <Button text="VIEW PROJECT" link={stateModal.link} />
            </div>
          </div>
          <div>
            <div className="ModalJc__button">
              <button
                className="ModalJc__button-item ModalJc__button-item--left btn"
                onClick={handlePrevModal}>
                <Icon icon={"dashicons:arrow-left-alt2"} />
              </button>
              <button
                className="ModalJc__button-item ModalJc__button-item--right btn"
                onClick={handleNextModal}>
                <Icon icon="dashicons:arrow-right-alt2" />
              </button>
            </div>
          </div>
        </ModalJc>
      )}
    </Layout>
  );
};