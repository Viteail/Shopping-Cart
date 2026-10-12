import classes from "./input.module.css";

interface IInputProps {
  type: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => void;
}

export const Input: React.FC<IInputProps> = (props) => {
  const { type, value, onChange } = props;

  return (
    <input
      className={classes.input}
      type={type}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};
