import { Navbar } from "../Elements/Navbar/Navbar";

export const HomePage = () => {
  const activePage = "/home";
  return (
    <div className="w-full h-screen bg-[url('/img/bg-2.jpg')] bg-cover">
      {/* Navbar */}
      <Navbar activePage={activePage} />
      {/* Description */}
      <div className="w-2/5 ml-24 h-4/5 flex items-center pt-32">
        <div className="mt-10">
          <h1 className="font-bold italic text-4xl mb-4 ml-14">
            Welcome to <span className="text-teal-700">Nusantara</span>
          </h1>
          <p className="text-justify text-gray-700">
            Tempat di mana keindahan dan kekayaan warisan budaya Indonesia
            bertemu dengan gaya modern. Di sini, kami dengan bangga menawarkan
            koleksi baju batik yang memukau, menciptakan pengalaman berbelanja
            yang tidak hanya tentang pakaian, tetapi juga tentang merayakan
            keindahan tradisi. setiap desain batik kami merangkum kisah unik
            warisan Indonesia dan mengekspresikannya melalui sentuhan modern.
            Kami berkomitmen untuk memberikan pengalaman belanja yang memuaskan
            dan mempersembahkan keindahan budaya Indonesia dalam setiap helai
            batik yang Anda pilih.
          </p>
        </div>
      </div>
    </div>
  );
};
