export const Button = (props) => {
  const {
    children,
    classname = "h-8",
    type = "submit",
    onClick = () => {},
    name,
  } = props;
  return (
    <button
      className={`my-4 font-semibold rounded-3xl bg-teal-600 hover:bg-teal-800 text-white ${classname}`}
      type={type}
      name={name}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
