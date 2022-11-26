import { Link } from "react-router-dom";

export const SubmitLink = (props) => {
  const { to, children } = props;

  return (
    <Link to={to}>
      <button className="button_submit">{children}</button>
    </Link>
  );
};
