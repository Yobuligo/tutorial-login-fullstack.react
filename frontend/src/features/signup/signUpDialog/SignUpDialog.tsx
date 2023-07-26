import { Card } from "../../../components/card/Card";
import { LabeledInput } from "../../../components/labeledInput/LabeledInput";
import { ISignUpButtonProps } from "../signupButton/SignUpButtonProps";

export const SignUpDialog: React.FC<ISignUpButtonProps> = (props) => {
  return (
    <Card>
      <form onSubmit={(event) => event.preventDefault()}>
        <LabeledInput label="Username" />
        <LabeledInput label="Password" type="password" />
        <LabeledInput label="Confirm Password" type="password" />
      </form>
    </Card>
  );
};
