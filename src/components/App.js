import React from "react";
import styles from "../assets/styles/m.module.scss";
import { Header } from "./Header";
import { Main } from "./Main";
console.log(styles);
export const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};
