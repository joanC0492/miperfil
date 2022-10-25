import { Icon } from "@iconify/react";
import { IWorkCard } from "@/interfaces/workCards.interface";

interface Props extends IWorkCard {
  getSrc: (name: string) => string;
  handleOpenModal: ({ ...w }: IWorkCard) => void;
}

export const WorkCard = ({
  id,
  title,
  skills,
  img,
  link,
  description,
  getSrc,
  handleOpenModal,
}: Props) => {
  return (
    <div className="Portfolio__wrap">
      <img
        src={getSrc(img + "-min.webp")}
        className="Portfolio__img"
        alt="Entel Empresas"
        loading="lazy"
      />
      <div className="Portfolio__info">
        <div>
          <h4 className="Portfolio__title">{title}</h4>
          <p className="Portfolio__skills">{skills}</p>
          <div className="Portfolio__links">
            <button
              className="Portfolio__icon-parent Portfolio__icon-parent--btn"
              onClick={() => {
                handleOpenModal({
                  id,
                  title,
                  skills,
                  img,
                  link,
                  description,
                });
              }}>
              <Icon icon={`bx-plus`} className="Portfolio__icon" />
            </button>
            <a
              target="_blank"
              href={link}
              title={title}
              className="Portfolio__icon-parent">
              <Icon icon={`bx:link`} className="Portfolio__icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
