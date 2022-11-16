import { Link } from "react-router-dom";

export const LogoLink = (props) => {
  const { to, children } = props;

  return (
    <Link to={to}>
      <label className="logo-text">{children}</label>
    </Link>
  );
};
