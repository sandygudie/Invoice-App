import AkanniLogo from "../../assets/akaani-logo.svg";
import LogoutIcon from "../../assets/logoutIcon.svg";
import classes from "./index.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { FaUserCircle, FaShoppingBasket, FaHistory } from "react-icons/fa";
import Activities from "../Activities";

const AppLayout = () => {
  return (
    <div className={`${classes.appLayoutContainer}`}>
      <NavigationLinks />
      <main className={classes.pageContent}>
        <Outlet />
      </main>
      <div className={classes.pageActivity}>
        <Activities />
      </div>
    </div>
  );
};

function NavigationLinks() {
  return (
    <div className={`${classes.navLinksWrapper} flex flex-col justify-between`}>
      <div>
        <img src={AkanniLogo} alt="logo" className={classes.logo} />
        <div className="mt-8">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? classes.activeNavLink : classes.navLink
            }
          >
            {({ isActive }) => (
              <>
                <FaUserCircle className={`text-xl ${classes.navLinkIcon}`} />
                <span className={isActive ? classes.activeNavLinkLabel : ""}>
                  Profile
                </span>
              </>
            )}
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.activeNavLink : classes.navLink
            }
          >
            {({ isActive }) => (
              <>
                <FaShoppingBasket
                  className={`text-lg ${classes.navLinkIcon}`}
                />
                <span className={isActive ? classes.activeNavLinkLabel : ""}>
                  Basket
                </span>
              </>
            )}
          </NavLink>
          <NavLink
            to="/order-history"
            className={({ isActive }) =>
              isActive ? classes.activeNavLink : classes.navLink
            }
          >
            {({ isActive }) => (
              <>
                <FaHistory className={`text-lg ${classes.navLinkIcon}`} />
                <span className={isActive ? classes.activeNavLinkLabel : ""}>
                  Order History
                </span>
              </>
            )}
          </NavLink>
        </div>
      </div>
      <div className="text-center flex flex-col items-center">
        <p className="px-3 py-2 text-white bg-primary rounded-full text-2xl mb-1 font-semibold ">
          LE
        </p>
        <p className="font-semibold mb-1">Laura Edson</p>
        <p className="text-gray-100 text-sm mb-4 ">lauraedson@work.com</p>
        <img src={LogoutIcon} alt="logout " className="w-10" />
      </div>
    </div>
  );
}

export default AppLayout;
