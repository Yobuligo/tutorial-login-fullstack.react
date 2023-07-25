import ReactDOM from "react-dom";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.backdrop} onClick={props.onClose} />
          <div className={styles.modalDialog}>{props.children}</div>
        </div>,
        document.getElementById("modalContainer")!
      )}
    </>
  );
};
