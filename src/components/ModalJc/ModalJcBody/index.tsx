import { ModalJc } from "..";
import { Button } from "@/components/Button";
import { Icon } from "@iconify/react";
import { IWorkCard } from "@/interfaces/workCards.interface";

interface IModalJcBody {
  workCards: IWorkCard[];
  stateModal: IWorkCard;
  setStateModal: React.Dispatch<IWorkCard>;
  setShowModal: React.Dispatch<boolean>;
  getSrc: (name: string) => string;
}

export const ModalJcBody = ({
  workCards,
  stateModal,
  setStateModal,
  setShowModal,
  getSrc,
}: IModalJcBody) => {
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
    <ModalJc setShowModal={setShowModal}>
      <div className="row justify-content-lg-center ModalJc__row">
        <div className="col-lg-6">
          <div className="ModalJc__figure">
            <img
              src={getSrc(stateModal.img + ".webp")}
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
  );
};
