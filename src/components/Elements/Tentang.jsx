import { Link } from "react-router-dom";

export const Tentang = (props) => {
  const { children, to } = props;
  return (
    <Link to={to} className="flex items-center my-2">
      {children}
    </Link>
  );
};
