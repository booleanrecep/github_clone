import React from "react";

export const Main = () => {
  return (
    <div>
      <main>
        <div className="tabs">
          <nav>
            <a>
              <svg></svg>Overview
            </a>
            <a>
              <svg></svg>Repository<span>148</span>
            </a>
            <a>
              <svg></svg>Projects
            </a>
            <a>
              <svg></svg>Packages
            </a>
          </nav>
        </div>
        <div className="main-content">
          <div className="user-content">
            <div>
              <img />
              <span></span>
            </div>
            <div>
              <p>Recep Öztürk</p>
              <p>booleanrecep</p>
            </div>
            <div>
              <p>Steadily improving...</p>
            </div>
          </div>
          <div className="tabs-content">
            <h2>Pinned || Customize your pins</h2>
            <form>
              <ol>
                <li>
                  <div>
                    <svg></svg>
                    <a>fake_keep</a>
                    <span></span>
                  </div>
                  <p>Google Keep-like Fake</p>
                  <p>
                    <span>0 Javascript</span>
                    <span>
                      {" "}
                      <svg>*</svg>2
                    </span>
                  </p>
                </li>
              </ol>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};
