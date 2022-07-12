import logo from "../../assets/logo.svg";
import Profile from "../Profile";
import ThemeToggle from "../ThemeToggle";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div id="app_container" className="w-full h-full">
      <Navigation />
      <main className="w-full mx-auto lg:py-16 py-24 text-base">
        <Outlet />
      </main>
    </div>
  );
}

const LogoComponent = () => {
  return (
    <div className="bg-primary w-16 h-[3.8rem] rounded-tr-2xl rounded-br-2xl text-center py-4">
      <img src={logo} alt="invoice-logo" className="px-4 inline h-[30px]" />
      <div className="absolute w-16 bg-white/20 rounded-tl-3xl rounded-br-2xl h-8 top-[1.8rem]">
        {" "}
      </div>
    </div>
  );
};
function Navigation() {
  return (
    <>
      {/* desktop */}
      <div className="hidden md:flex justify-between items-center fixed h-full bg-secondary flex-col rounded-tr-2xl rounded-br-2xl z-30">
        <LogoComponent />
        <div className="text-center">
          <ThemeToggle />
          <Profile />
        </div>
      </div>

      {/* Tablet */}
      <div className="md:hidden flex fixed w-full bg-secondary justify-between items-center rounded-tr-2xl rounded-br-2xl z-30">
        <LogoComponent />
        <div className="text-center flex items-center ">
          <ThemeToggle />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
