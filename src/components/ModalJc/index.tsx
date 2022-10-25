import ReactDOM from "react-dom";
import "@/scss/components/ModalJc.scss";
import { Icon } from "@iconify/react";
interface Props {
  children?: React.ReactNode;
  setShowModal: React.Dispatch<boolean>;
}

export const ModalJc: React.FC<Props> = ({ children, setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
    document.querySelector("html")!.classList.remove("disabled");
  };

  return ReactDOM.createPortal(
    <div className="ModalJc modal fade show">
      <div className="ModalJc__dialog modal-dialog modal-dialog-centered">
        <div className="ModalJc__content modal-content">
          <button className="ModalJc__close" onClick={handleClose}>
            <Icon icon={"carbon:close-outline"} className="ModalJc__icon" />
          </button>

          {children}
        </div>
      </div>
    </div>,
    document.getElementById("modaljc") as Element
  );
};
