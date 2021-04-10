import React from "react";
import { Tabs } from "./Tabs";
import { UserContent } from "./UserContent";
import { TabsContent } from "./TabsContent";
import "../assets/styles/main.scss";
export const Main = () => {
  const ref = React.useRef();
  const handlePosition = () => {
    return window.pageYOffset > ref.current.offsetTop
      ? (ref.current.style.position = "fixed")
      : (ref.current.style.position = "inherit");
  };
  React.useEffect(() => {
    console.log(ref.current);
    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);
  return (
    <main>
      <Tabs ref={ref} />
      <UserContent />
      <TabsContent />
    </main>
  );
};
