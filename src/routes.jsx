import React from "react";
import { BrowserRouter as Router, Switch, Route as R } from "react-router-dom";

import css from "./styles.css";

import Nav from "./components/nav";
import Home from "./components/home";
import PokemonFlashCards from "./components/pokemon/flash-cards";
// import PokemonEVHelper from './components/pokemon/ev-helper';
import PokemonCramomatic from "./components/pokemon/cramomatic";
import PokemonNotes from "./components/pokemon/notes";

export default function App() {
  return (
    <Router>
      <div className={css.container}>
        <Nav />
        <div className={css.pageContent}>
          <Switch>
            {/* <R path="/pokemon/evhelper">
                            <PokemonEVHelper />
                        </R> */}
            <R path="/pokemon/flashcards">
              <PokemonFlashCards />
            </R>
            <R path="/pokemon/cramomatic">
              <PokemonCramomatic />
            </R>
            <R path="/pokemon/notes">
              <PokemonNotes />
            </R>
            <R path="/">
              <Home />
            </R>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
