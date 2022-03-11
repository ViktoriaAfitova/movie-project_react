import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Context from "./components/context/context";
import { useReducer } from "react";
import { reducer } from "../src/components/reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {movie: []})

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Header />
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;
