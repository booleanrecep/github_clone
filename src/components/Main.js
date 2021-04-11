import React from "react";
import { Tabs } from "./Tabs";
import { UserContent } from "./UserContent";
import { TabsContent } from "./TabsContent";
import "../assets/styles/main.scss";
export const Main = () => {
  const ref = React.useRef();
  const ref_user_img = React.useRef();
  const [imgoffset, setImgoffset] = React.useState(0);
  const handlePosition = () => {
    setImgoffset(ref_user_img.current.getBoundingClientRect().y);
    return window.pageYOffset > ref.current.offsetTop
      ? (ref.current.style.position = "fixed")
      : (ref.current.style.position = "inherit");
  };
  React.useEffect(() => {
    console.log("off", ref_user_img.current.offsetTop);

    window.addEventListener("scroll", handlePosition);
    return () => {
      window.removeEventListener("scroll", handlePosition);
    };
  }, []);
  return (
    <main>
      <Tabs showUser={imgoffset} ref={ref} />
      <UserContent ref={ref_user_img} />
      <TabsContent />
    </main>
  );
};
