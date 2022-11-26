import { Link } from "react-router-dom";

export const MainLink = (props) => {
  const { to, children } = props;

  return (
    <Link to={to}>
      <button className="MainButton">{children}</button>
    </Link>
  );
};