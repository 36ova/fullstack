import { Link } from "react-router-dom";


export const WordLink = (props) => {
  const { to, children } = props;

  return (
    <Link to={to}>
      <label className="word-link">{children}</label>
    </Link>
  );
};
