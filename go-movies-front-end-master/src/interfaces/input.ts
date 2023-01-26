export type InputComponent = {
  title: string;
  type: string;
  className: string;
  name: string;
  autoComplete: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
