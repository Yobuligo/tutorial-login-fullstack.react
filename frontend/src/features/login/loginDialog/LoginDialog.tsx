import { LabeledInput } from "../../../components/LabeledInput";
import { ILoginDialog } from "./ILoginDialog";
import styles from "./LoginDialog.module.css";

export const LoginDialog: React.FC<ILoginDialog> = (props) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <>
      <form onSubmit={onSubmit} className={styles.loginDialog}>
        <LabeledInput className={styles.labeledInput} label="Username" />
        <LabeledInput
          className={styles.labeledInput}
          label="Password"
          type="password"
        />
        <div className={styles.loginButton}>
          <button>Login</button>
        </div>
        <div>create Account</div>
      </form>
    </>
  );
};
