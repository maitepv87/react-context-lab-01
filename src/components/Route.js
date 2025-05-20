import { useContext } from "react";
import { NavigationContext } from "../context/navigate";

export const Route = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return children;
  }

  return null;
};
