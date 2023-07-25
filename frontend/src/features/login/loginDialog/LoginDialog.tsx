import { useId } from "react";
import { ILoginDialog } from "./ILoginDialog";
import { LabeledInput } from "../../../components/LabeledInput";

export const LoginDialog: React.FC<ILoginDialog> = (props) => {
  const usernameId = useId();
  const passwordId = useId();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor={usernameId}>Username</label>
        </div>
        <div>
          <input type="text" id={usernameId} />
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
        </div>
        <div>
          <input type="password" id={passwordId} />
        </div>
        <div>create Account</div>
      </form>
    </>
  );
};
