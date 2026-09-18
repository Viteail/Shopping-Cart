import classes from "./categorie-card.module.css";

interface ICatergorieCardProps {
  children: React.ReactNode;
  src: string;
}

export const CatergorieCard: React.FC<ICatergorieCardProps> = (props) => {
  const { children, src } = props;
  return (
    <div
      className={classes.card}
      style={{ "--dynamic-bg": `url(${src})` } as React.CSSProperties}
    >
      <p className={classes.text}>{children}</p>
    </div>
  );
};
