import { Link } from "react-router-dom";
import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  height: 50px;
  width: 200px;
  border-radius: 5px;
  outline: 0;
  margin: 10px 40px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  font-size: 18px;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

export const MainLink = (props) => {
  const { to, children } = props;

  return (
    <Link to={to}>
      <Button className="roundable">{children}</Button>
    </Link>
  );
};