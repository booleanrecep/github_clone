import React from "react";
import { Tabs } from "./Tabs";
import { UserContent } from "./UserContent";
import { TabsContent } from "./TabsContent";
import "../assets/styles/main.scss";
export const Main = () => {
  const ref_tabs = React.useRef();
  const ref_user = React.useRef();
  const [offsets, setOffsets] = React.useState({
    useroffset: 0,
    tabsoffset: 0,
  });
  const handlePosition = () => {
    setOffsets({
      useroffset: ref_user.current.getBoundingClientRect().y,
      tabsoffset: ref_tabs.current.getBoundingClientRect().y,
    });
    if (window.innerWidth > 879) {
      window.pageYOffset > 80
        ? (ref_tabs.current.style.position = "fixed")
        : (ref_tabs.current.style.position = "inherit");
    } else {
      window.pageYOffset > 550
        ? (ref_tabs.current.style.position = "fixed")
        : (ref_tabs.current.style.position = "relative");
    }
    console.log(offsets.useroffset);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);
  // console.log(offsets);
  return (
    <div className="container">
      <main>
        <UserContent ref={ref_user} />
        <div className="tc">
          <Tabs showUser={offsets.useroffset} ref={ref_tabs} />

          <TabsContent />
        </div>
      </main>
    </div>
  );
};
