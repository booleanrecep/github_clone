import React from "react";
import { repositoriesSvg, grabSvg, starSvg } from "../assets/data";
export const TabsContent = () => {
  return (
    <div className="tabs-content">
      <h2>
        <span>Pinned </span>
        <span>Customize your pins</span>
      </h2>
      <ol>
        {[1, 2, 3, 4, 5, 7, 10, 11, 22, 44].map((el) => {
          return (
            <li key={el}>
              <div>
                {repositoriesSvg}
                <a>fake_keep</a>
                {grabSvg}
              </div>
              <p>Google Keep-like Fake</p>
              <p>
                <span>&#128192; Javascript</span>
                {starSvg} 2
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
