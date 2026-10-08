import classes from "./button.module.css";
import { cn } from "@utils/cn";

export type AvailableClass =
  | "primary"
  | "secondary"
  | "category"
  | "active"
  | "increment"
  | "decrement"
  | "cart"
  | "remove"
  | "cancel"
  | "purchase"

interface IButonProps {
  children: React.ReactNode;
  onClick?: () => void;
  classesToAppend?: AvailableClass[];
}

export const Button: React.FC<IButonProps> = (props) => {
  const { children, onClick, classesToAppend = [] } = props;

  return (
    <div>
      <button
        className={cn(classes, [
          classes.button,
          ...classesToAppend.map((key) => classes[key]),
        ])}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
