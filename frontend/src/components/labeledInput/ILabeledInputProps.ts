import { HTMLInputTypeAttribute } from "react";

export interface ILabeledInputProps {
  className?: string;
  initialValue?: string;
  label: string;
  onValueChange?(value: string): void;
  type?: HTMLInputTypeAttribute | undefined;
}
