import React from "react";

import Header from "../header";
import NavLink, { AdminNav } from "./nav-link";

import css from "./styles.css";

const Nav = () => (
  <div className={css.navContainer}>
    <Header />
    <NavLink icons="fa-gamepad" to="/pokemon/flashcards">
      Flash Cards
    </NavLink>
    {/* <NavLink icons="fa-gamepad" to="/pokemon/evhelper">
            EV Helper
        </NavLink> */}
    <NavLink
      icons={["fa-gamepad", "fa-shopping-cart"]}
      to="/pokemon/cramomatic"
    >
      Cram-o-matic Helper
    </NavLink>
    <NavLink icons="fa-gamepad" to="/pokemon/notes">
      Pokemon Notes
    </NavLink>
  </div>
);

export default Nav;
