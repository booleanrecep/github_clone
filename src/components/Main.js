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
    window.pageYOffset > 80 && window.innerWidth > 879
      ? (ref_tabs.current.style.position = "fixed")
      : (ref_tabs.current.style.position = "inherit");
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);
  console.log(offsets);
  return (
    <main>
      <Tabs showUser={offsets.useroffset} ref={ref_tabs} />
      <UserContent ref={ref_user} />

      <TabsContent />
      {/* <Tabs showUser={offsets.useroffset} ref={ref_tabs} /> */}
    </main>
  );
};
