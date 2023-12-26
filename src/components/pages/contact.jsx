import { Button } from "../Elements/Button/Button";
import { Input } from "../Elements/Input/Input";
import { Navbar } from "../Elements/Navbar/Navbar";
import { CardContact } from "../Fragments/CardContact";

const persons = [
  {
    name: "Faisal Putra R",
    skills: ["Full Stack", "Android", "Student"],
    notel: 81385776118,
    gmail: "faizalputraramadhan29@gmail.com",
    image: "./public/img/faisal-2.jpeg",
  },
  {
    name: "M. Raihan Hafiz",
    skills: ["Front End", "Gamers", "Student"],
    notel: 895333909847,
    gmail: "muhammadraihan86185@gmail.com",
    image: "./public/img/hannn.jpeg",
  },
  {
    name: "Aditya Vahreza",
    skills: ["Back End", "Cyber Security", "Student"],
    notel: 88224931267,
    gmail: "vahreza48@gmail.com",
    image: "./public/img/adit-denis.jpeg",
  },
];

export const ContactPage = () => {
  const activePage = "/contact";
  return (
    <>
      {/* Start */}
      <div className="w-full h-screen bg-[url('./public/img/bg-4.jpg')] bg-cover">
        <Navbar activePage={activePage} />
        <div className="w-full pt-20">
          <div className="w-full flex justify-center pr-10">
            <h1 className="text-4xl font-semibold ml-10 mt-8 text-slate-300 [text-shadow:_0_3px_0_rgb(0_0_0_/_100%)]">
              Contact Person
            </h1>
          </div>
          <div className="flex justify-evenly mt-16">
            {persons.map((person, index) => (
              <CardContact key={index} person={person} />
            ))}
          </div>
        </div>
      </div>
      {/* End */}
      {/* Start */}
      <div className="w-full h-screen flex flex-col items-center pt-32 bg-[url('./public/img/bg-7.jpg')] bg-cover bg-bottom">
        <div className="block my-6">
          <h1 className="mx-auto ml-8 text-4xl font-semibold  text-slate-100 [text-shadow:_0_2px_0_rgb(0_0_0_/_100%)]">
            Get in touch
          </h1>
          <p className="mx-auto text-base text-gray-950 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] underline underline-offset-8">
            Let's talk about your project on this page
          </p>
        </div>
        <div className="py-10">
          <form action="">
            <div className="flex justify-between">
              <Input
                type="text"
                name="username"
                placeholder="Username"
                classname="mr-2"
              />
              <Input
                type="email"
                name="email"
                placeholder="Example@gmail.com"
              />
            </div>
            <div class="max-w-2xl mx-auto">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full mx-auto text-sm text-gray-900 bg-gray-200 rounded-lg border border-gray-300 focus:ring-teal-600 focus:border-teal-500 outline-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <Button children="Submit" classname="px-20 py-2 text-sm" />
            </div>
          </form>
        </div>
      </div>
      {/* End */}
    </>
  );
};
