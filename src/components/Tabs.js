import React from "react";
import {
  overviewSvg,
  repositoriesSvg,
  projectsSvg,
  packagesSvg,
} from "../assets/data";
import me from "../assets/me.png";
// eslint-disable-next-line react/display-name
export const Tabs = React.forwardRef((props, ref) => {
  return (
    <div className="tabs" ref={ref}>
      <div
        // eslint-disable-next-line react/prop-types
        style={{ visibility: props.showUser > -240 ? "hidden" : "visible" }}
      >
        <img
          alt="me"
          src={me}
          //
        />
        <span>booleanrecep</span>
      </div>
      <nav>
        <a>
          <span>{overviewSvg}</span>
          Overview
        </a>
        <a>
          <span>{repositoriesSvg}</span>Repository | 148
        </a>
        <a>
          <span>{projectsSvg}</span>Projects
        </a>
        <a>
          <span>{packagesSvg}</span>Packages
        </a>
      </nav>
    </div>
  );
});
