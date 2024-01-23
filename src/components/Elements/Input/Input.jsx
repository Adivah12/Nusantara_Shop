export const Input = (props) => {
  const { placeholder, name, type, classname } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`border border-slate-200 bg-transparent mb-3 placeholder:text-gray-400 text-sm rounded-lg pl-2 py-1 px-8 outline-none focus:border-teal-500 focus:text-slate-300 ${classname}`}
      />
    </div>
  );
};
