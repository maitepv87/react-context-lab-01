import { useContext } from "react";
import { NavigationContext } from "../context/navigate";

export const Link = ({ to, children }) => {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    if (event.metakey || event.ctrlkey) return;

    event.preventDefault();

    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
};
