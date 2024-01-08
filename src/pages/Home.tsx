import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import logo from "../assets/logo.svg";
import invoiceView from "../assets/invoice-view.webp";
import viewInvoice from "../assets/new-invoice.webp";
import editIvoice from "../assets/edit-invoice.webp";
import invoiceIllustration from "../assets/invoice-illustration.webp";
import { IoCheckmark } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdCircle } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
  const navItems = [
    { title: "Features", link: "features" },
    { title: "Contact", link: "connect" },
  ];
  return (
    <div
      ref={hero}
      className="h-screen right-0 w-full bg-[#141624] text-white top-0 fixed overflow-y-scroll"
    >
      <header className="header flex items-center max-w-7xl mx-auto justify-between px-4 lg:px-16 py-8">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="hidden md:flex items-center gap-x-6">
          {navItems.map((ele) => {
            return (
              <a
                key={ele.title}
                href={`#${ele.link}`}
                className="hover:text-primary"
              >
                {ele.title}
              </a>
            );
          })}
        </div>
      </header>
      <main>
        <div className="flex flex-wrap items-center mx-4 sm:mx-8 md:mx-24 md:justify-between 2xl:justify-center pt-8 pb-20 md:pb-36">
          <div className="px-3 lg:px-0 lg:my-8 text-left w-full lg:w-3/6 max-w-xl">
            <h1 className="title font-bold text-4xl md:text-5xl">
              Quick And Easy Invoice Mangement.
            </h1>
            <div className="description">
              <div className="text-lg md:text-[25px] my-8 font-normal leading-[2.5rem]">
                <p className="flex items-center justify-start gap-x-4 md:gap-x-2">
                  <MdCircle className="text-xs" /> Keep track of your business
                  inflows.{" "}
                </p>
                <p className="flex items-center justify-start gap-x-4 md:gap-x-2">
                  <MdCircle className="text-xs" /> Manage your invoicing
                  process.
                </p>
              </div>
              <div className="hover:scale-110 my-8 transition ease-in-out w-fit delay-100 duration-300">
                <button
                  onClick={() => {
                    navigate(`/invoices`);
                  }}
                  className=" bg-white rounded-lg text-black text-lg px-10 py-4 font-semiBold"
                >
                  Get Started
                </button>
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
          className="bg-secondary/50 px-4 md:px-12 pt-10 pb-10 md:pb-20 text-center"
        >
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold py-8 text-left ">
              Features
            </h1>

            <div className="box my-6 md:my-8 text-center">
              <div className="simplified-view flex-wrap flex justify-center gap-8 items-center ">
                <img
                  src={invoiceView}
                  className="h-72 lg:h-[26rem]"
                  alt="mutiple-projects"
                />
                <div className="text-left md:px-8 py-4">
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
                      "Pagination.",
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

              {/* <h2 className="text-3xl font-bold text-left">Views</h2> */}
              <div className="flex flex-wrap items-center mt-4 md:mt-20 gap-8 md:gap-x-16 justify-center">
                <img
                  src={viewInvoice}
                  className="h-44 md:h-80 w-auto"
                  alt="mutiple-projects"
                />
                <img
                  src={editIvoice}
                  className="h-44 md:h-80 w-auto"
                  alt="mutiple-projects"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-18 bg-secondary/50 px-4 md:px-12"></section>
        <section
          id="connect"
          className="bg-secondary/90 pt-24 text-center text-white"
        >
          <p className="text-4xl md:text-3xl font-bold"> Let&apos;s Talk</p>
          <p className="mt-4 w-5/6 md:w-1/2 mx-auto font-medium">
            If have any suggestions, get in touch - I&apos;d love to hear from
            you!
          </p>
          <div className="flex py-4 pb-12 items-center  text-white gap-x-8 justify-center">
            <a
              href="https://github.com/sandygudie"
              target="_blank"
              className="hover:text-gray"
              rel="noreferrer"
            >
              {" "}
              <FaGithub />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/goodnews-sandy"
              className="hover:text-gray"
            >
              {" "}
              <FaLinkedinIn />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://goodnewssandy.netlify.app/#project"
              className="hover:text-gray"
            >
              {" "}
              <FaExternalLinkAlt />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:goodnewssandy@gmail.com"
              className="hover:text-gray"
            >
              {" "}
              <IoMdMail />
            </a>
          </div>
          <div className="w-full pt-12 pb-4 text-xs text-center ">
            Copyright <span>&copy;</span>
            {new Date().getFullYear()}. Sandy Goodnews
          </div>
        </section>
      </main>
    </div>
  );
}
