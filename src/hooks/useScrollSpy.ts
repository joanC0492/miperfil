import { heightContext } from "@/Context/HeightContext";
import { useContext, useEffect, useState } from "react";

export const useScrollSpy = (): string => {
  const [nameId, setNameId] = useState<string>("");
  const { elements } = useContext(heightContext);

  useEffect(() => {
    const updatePosition = (): void => {
      let { scrollY, innerHeight } = window;
      const { offsetHeight } = document.body;
      innerHeight /= 1.25;
      if (scrollY >= 0 && scrollY <= innerHeight) {
        setNameId("hero");
      } else if (
        elements[1]?.offsetTop - scrollY < innerHeight &&
        elements[2]?.offsetTop - scrollY >= innerHeight
      ) {
        setNameId("about");
      } else if (
        elements[2]?.offsetTop - scrollY < innerHeight &&
        elements[3]?.offsetTop - scrollY >= innerHeight
      ) {
        setNameId("resume");
      } else if (
        elements[3]?.offsetTop - scrollY < innerHeight &&
        elements[4]?.offsetTop - scrollY >= innerHeight
      ) {
        setNameId("portfolio");
      } else if (
        elements[4]?.offsetTop - scrollY < innerHeight &&
        offsetHeight - scrollY >= innerHeight
      ) {
        setNameId("contact");
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, [elements]);

  return nameId;
};