import classes from "./button.module.css";
import { cn } from "../../utils/cn.ts";

interface IButonProps {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
}

export const Button: React.FC<IButonProps> = (props) => {
  const { children, onClick, primary = false, secondary = false } = props;

  return (
    <div>
      <button
        className={cn(classes, [
          classes.button,
          `${primary && classes.primary}`,
          `${secondary && classes.secondary}`,
        ])}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
