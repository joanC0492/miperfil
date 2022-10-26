import { Layout } from "../Layout";
import { LayoutTitle } from "../Layout/LayoutTitle";
import { useState } from "react";
import { IWorkCard } from "@/interfaces/workCards.interface";
import "@/scss/components/Portfolio.scss";
import { ModalJcBody } from "../ModalJc/ModalJcBody";
import { WorkCard } from "../WorkCard";

interface IModule {
  default: string;
}

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
  {
    id: 7,
    title: "Personal | miperfil",
    skills: "React | HTML | SCSS | TS",
    img: `project-miperfil`,
    link: "https://joancochachi.com/",
    description: ``,
  },
];

const projectImgs: Record<string, IModule> = import.meta.globEager(
  "@/assets/projects/*.webp"
);

export const Portfolio = (): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [stateModal, setStateModal] = useState<IWorkCard>({
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
  }: IWorkCard): void => {
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

  const getSrc = (name: string): string => {
    const path: string = Object.keys(projectImgs).find((item: string) =>
      item.includes(name)
    )!;
    return projectImgs[path].default;
  };

  return (
    <Layout id="portfolio">
      <LayoutTitle name="PORTAFOLIO">
        <p>ALGUNAS COSAS QUE HE CONSTRUIDO</p>
      </LayoutTitle>
      <div className="row text-center">
        {workCards.map((w: IWorkCard) => (
          <div className="col-md-6 col-lg-4" key={w.id}>
            <WorkCard
              {...w}
              getSrc={(name: string) => getSrc(name)}
              handleOpenModal={({ ...w }: IWorkCard) => handleOpenModal(w)}
            />
          </div>
        ))}
      </div>

      {showModal && (
        <ModalJcBody
          workCards={workCards}
          stateModal={stateModal}
          setStateModal={setStateModal}
          setShowModal={setShowModal}
          getSrc={(name: string) => getSrc(name)}
        />
      )}
    </Layout>
  );
};
