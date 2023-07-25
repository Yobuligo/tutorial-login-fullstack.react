import styles from "./SignUpButton.module.css";
import { ISignUpButtonProps } from "./SignUpButtonProps";

export const SignUpButton: React.FC<ISignUpButtonProps> = (props) => {
  return (
    <div className={styles.signUpButton} onClick={() => props.onClick}>
      Sign Up
    </div>
  );
};
