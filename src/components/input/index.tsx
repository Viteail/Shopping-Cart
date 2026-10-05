import classes from "./input.module.css";

interface IInputProps {
  type: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<IInputProps> = (props) => {
  const { type } = props;

  return <input className={classes.input} type={type} />;
};
