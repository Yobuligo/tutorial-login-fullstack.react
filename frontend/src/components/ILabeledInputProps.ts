export interface ILabeledInputProps {
  className?: string;
  initialValue: string;
  label: string;
  onValueChange?(value: string): void;
}
