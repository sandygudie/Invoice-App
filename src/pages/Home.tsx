import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import logo from "../assets/logo.svg";
import invoiceView from "../assets/invoice-view.webp";
import invoiceIllustration from "../assets/invoice-illustration.webp";
import { IoCheckmark } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Home() {
  const hero = useRef(null);
  useGSAP(
    () => {
      gsap.from(".header", {
        duration: 1.5,
        opacity: 0,
        y: -50,
        ease: "back",
      });
      gsap.from(".title", {
        duration: 1.5,
        opacity: 0,
        delay: 0.5,

        y: 10,
      });
      gsap.from(".img-illustration", {
        duration: 1.8,
        delay: 0.8,
        opacity: 0,
        x: 60,
      });
      gsap.from(".description", {
        duration: 2,
        opacity: 0,
        delay: 1.2,
        y: 40,
      });
    },

    { scope: hero }
  );
 
  return (
    <div ref={hero} className="h-full w-full relative">
      <header className="header flex items-center justify-between px-4 lg:px-16 py-8">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </header>
      <main>
        <div className="flex flex-wrap items-center mx-4 sm:mx-8 md:mx-24 justify-between">
          <div className="px-3 lg:px-0 lg:my-8 text-left w-full lg:w-3/6">
            <h1 className="title font-bold text-4xl md:text-5xl">
              Quick And Easy Invoice Mangement.
            </h1>
            <div className="description ">
              <p className="text-lg md:text-[25px] my-8 font-normal leading-[2.5rem]">
                Keep track of your business inflows and mange your invoicing
                process.
              </p>
              <div className="hover:scale-110 my-8 transition ease-in-out w-fit  delay-100 duration-300">
                <Link
                  to="/invoices"
                  className=" bg-white rounded-lg text-black font-medium text-lg px-10 py-4 font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <img
            src={invoiceIllustration}
            alt=""
            className="img-illustration w-[20rem] md:w-[24rem]"
          />
        </div>
        <section
          id="features"
          className="px-4 md:px-0 text-center rounded-b-[9rem] py-24"
        >
          <h1 className="text-3xl md:text-4xl font-bold mt-24">Features</h1>

          <div className="box my-6 md:my-16 ">
            <div className="simplified-view grid justify-center md:justify-between items-center md:grid-cols-2 md:ml-24">
              <img
                src={invoiceView}
                className="h-72 lg:h-[26rem]"
                alt="mutiple-projects"
              />
              <div className="text-left md:px-8 py-8 md:py-4">
                <p className="text-2xl lg:text-3xl font-semibold mb-4">
                  What you get
                </p>
                <div>
                  {[
                    "Simplified interactive invoice view.",
                    "Create and manage all invoice transactions.",
                    "Optimal layout on device's screen size.",
                    "Keep track of any changes.",
                    "Toggle theme between dark and light mode.",
                    "Form validations.",
                    "Filter options.",
                  ].map((ele, index) => {
                    return (
                      <p
                        key={index}
                        className="lg:text-xl flex items-center gap-x-2 py-2"
                      >
                        {" "}
                        <IoCheckmark size={20} className="text-primary/50" />
                        {ele}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="connect"
          className="mt-16 bg-secondary/50 md:mt-36 py-16 text-center"
        >
          <p className="text-4xl md:text-3xl text-white font-bold">
            {" "}
            Let&apos;s Talk
          </p>
          <p className="text-white text-base mt-4 mb-7 w-5/6 md:w-1/2 mx-auto font-medium">If have any suggestions, get in touch - I&apos;d love to hear from you!</p>
          <div className="flex mt-8 items-center text-base text-white gap-x-8 justify-center">
            <Link
              to="https://github.com/sandygudie"
              target="_blank"
              className="hover:text-gray"
            >
              {" "}
             < FaGithub/>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/goodnews-sandy"
              className="hover:text-gray"
            >
              {" "}
             < FaLinkedinIn/>
            </Link>
            <Link
              target="_blank"
              to="https://goodnewssandy.netlify.app/#project"
              className="hover:text-gray"
            >
              {" "}
         <FaExternalLinkAlt />
            </Link>
            <Link
              target="_blank"
              to="mailto:goodnewssandy@gmail.com"
              className="hover:text-gray"
            >
              {" "}
            <IoMdMail/>
            </Link>
          </div>
        </section>
      </main>
      <footer className="py-3 w-full text-sm bg-white text-center text-black">
        Copyright <span>&copy;</span>
        {new Date().getFullYear()}. Sandy Goodnews
      </footer>
    </div>
  );
}
