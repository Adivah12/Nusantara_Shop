import { WaIcon } from "../Elements/Icons/Wa";

export const CardContact = ({ person }) => {
  const { name, skills, notel, gmail, image } = person;
  return (
    <div className="w-64 flex flex-col ml-4 my-4 py-4 bg-slate-200 shadow-lg rounded-xl hover:shadow-2xl">
      <img src={image} alt="error" className="w-24 mx-auto my-2 rounded-xl" />
      <p className="mx-auto font-bold text-sm font-allan my-2">{name}</p>
      <p className="mx-auto text-sm my-2">{skills.join(" | ")}</p>
      <div className="flex flex-col">
        <p className="flex items-center mx-auto">
          <WaIcon /> +62{notel}
        </p>
        <p className="italic text-sm my-2 mx-auto">{gmail}</p>
      </div>
    </div>
  );
};
