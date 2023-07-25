import { Card } from "../../../components/card/Card";
import { LabeledInput } from "../../../components/labeledInput/LabeledInput";
import { SignUpButton } from "../../signup/signupButton/SignUpButton";
import { ILoginDialog } from "./ILoginDialog";
import styles from "./LoginDialog.module.css";

export const LoginDialog: React.FC<ILoginDialog> = (props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <Card className={styles.loginDialog}>
      <form onSubmit={onSubmit}>
        <LabeledInput className={styles.labeledInput} label="Username" />
        <LabeledInput
          className={styles.labeledInput}
          label="Password"
          type="password"
        />
        <div className={styles.loginButton}>
          <button onClick={props.onLogin}>Login</button>
        </div>
        <div className={styles.signUp}>
          <SignUpButton />
        </div>
      </form>
    </Card>
  );
};
