export interface IStyledInput {
  isError: boolean;
}

export interface Props {
  label: string;
  register: Function;
  name: string;
  error: string;
  [rest: string]: any;
}
