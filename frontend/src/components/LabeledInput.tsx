import { useId, useState } from "react";
import { ILabeledInputProps } from "./ILabeledInputProps";

export const LabeledInput: React.FC<ILabeledInputProps> = (props) => {
  const elementId = useId();
  const [value, setValue] = useState(props.initialValue);

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
    props.onValueChange?.(event.currentTarget.value);
  };

  return (
    <div className={props.className}>
      <div>
        <label htmlFor={elementId}>{props.label}</label>
      </div>
      <div>
        <input
          type="text"
          id={elementId}
          value={value}
          onChange={onValueChange}
        />
      </div>
    </div>
  );
};
