import classes from "./btn-link.module.css";

interface IButtonLinkProps {
  href: string;
  children: React.ReactNode;
}

export const ButtonLink: React.FC<IButtonLinkProps> = (props) => {
  const { href, children } = props;

  return (
    <div>
      <a className={classes.link} href={`#${href}`}>
        {children}
      </a>
    </div>
  );
};
