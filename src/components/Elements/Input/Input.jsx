export const Input = (props) => {
  const { placeholder, name, type, classname } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`border-2 border-teal-700 mb-3 placeholder:text-gray-400 text-sm rounded-lg pl-2 py-1 px-8 outline-none focus:border-teal-700 ${classname}`}
      />
    </div>
  );
};
