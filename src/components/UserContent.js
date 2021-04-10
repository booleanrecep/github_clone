import React from "react";
import me from "../assets/me.png";
import {
  followersSvg,
  starSvg,
  locationSvg,
  emailSvg,
  portfolioLinkSvg,
  highlightSvg,
} from "../assets/data";
export const UserContent = () => {
  return (
    <div className="user-content">
      <div className="image">
        <img title="me" src={me} />
        <div>
          <details open>
            <summary></summary>
            <div></div>
            <span>&#127930;</span>
            <span>Working from home</span>
            <div></div>
          </details>
        </div>
      </div>
      <div className="top">
        <h1>
          <span>Recep Öztürk</span>
          <span>booleanrecep</span>
        </h1>
      </div>

      <div className="middle">
        <p>Steadily improving...</p>
        <button>Edit profile</button>
        <div>
          <div>
            <a>
              {followersSvg}
              <span>10 followers </span>
            </a>
          </div>
          .
          <div>
            <a>
              <span> 45 following </span>
            </a>
          </div>
          .
          <div>
            <a>
              {starSvg}
              <span> 16</span>
            </a>
          </div>
        </div>
        <ul>
          <li>
            {locationSvg}
            <span>Istanbul</span>
          </li>
          <li>
            {emailSvg}
            <a>recep.fed@gmail.com</a>
          </li>
          <li>
            {portfolioLinkSvg}
            <a>https://recepfed.netlify.app</a>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <h2>Highlights</h2>
        {highlightSvg}
        <span>Arctic Code Vault Contributor</span>
      </div>
    </div>
  );
};
