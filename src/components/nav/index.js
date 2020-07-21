import React from "react";

import Header from "../header";
import NavLink from "./nav-link";

import css from "./styles.css";

const Nav = () => (
  <div className={css.navContainer}>
    <Header />
    <NavLink icons="fa-gamepad" to="/flashcards">
      Flash Cards
    </NavLink>
    {/* <NavLink icons="fa-gamepad" to="/evhelper">
            EV Helper
        </NavLink> */}
    <NavLink icons={["fa-gamepad", "fa-shopping-cart"]} to="/cramomatic">
      Cram-o-matic Helper
    </NavLink>
    <NavLink icons="fa-gamepad" to="/notes">
      Pokemon Notes
    </NavLink>
  </div>
);

export default Nav;
