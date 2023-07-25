import ReactDOM from "react-dom";
import { IModalDialogProps } from "./IModalDialogProps";
import styles from "./ModalDialog.module.css";

export const ModalDialog: React.FC<IModalDialogProps> = (props) => {
  return (
    <div className={styles.modalDialog}>
      {ReactDOM.createPortal(
        props.children,
        document.getElementById("modalContainer")!
      )}
    </div>
  );
};
