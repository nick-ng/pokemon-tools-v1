import React from "react";
import { HashRouter as Router, Switch, Route as R } from "react-router-dom";

import css from "./styles.css";

import Nav from "./components/nav";
import Home from "./components/home";
import PokemonFlashCards from "./components/pokemon/flash-cards";
// import PokemonEVHelper from './components/pokemon/ev-helper';
import PokemonCramomatic from "./components/pokemon/cramomatic";
import PokemonNotes from "./components/pokemon/notes";

export default function App() {
  return (
    <Router basename="pokemon-tools">
      <div className={css.container}>
        <Nav />
        <div className={css.pageContent}>
          <Switch>
            {/* <R path="/pokemon/evhelper">
                            <PokemonEVHelper />
                        </R> */}
            <R path="/flashcards">
              <PokemonFlashCards />
            </R>
            <R path="/cramomatic">
              <PokemonCramomatic />
            </R>
            <R path="/notes">
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
