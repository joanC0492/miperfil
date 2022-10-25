import scss from "@/scss/components/NavBar.module.scss";
import { NavBarItem } from "./NavBarItem";
import { INavItem } from "@/interfaces/NavBar.interface";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useTheme } from "@/hooks/useTheme";
import { useLocalStorage } from "@/hooks/useLocalStorage";

// Lista de Items
const items: INavItem[] = [
  {
    id: 1,
    name: "Inicio",
    icon: "bx:home",
    hash: "hero",
  },
  {
    id: 2,
    name: "Sobre mí",
    icon: "bx:user",
    hash: "about",
  },
  {
    id: 3,
    name: "Experiencia",
    icon: "bx:file-blank",
    hash: "resume",
  },
  {
    id: 4,
    name: "Portafolio",
    icon: "bx:book-content",
    hash: "portfolio",
  },
  {
    id: 5,
    name: "Contacto",
    icon: "bx:envelope",
    hash: "contact",
  },
];

// Temas
const themeDark = {
  "theme-bg": "#212428",
  "theme-txt": "#ffffffb3",
  "theme-title": "#f2f3f5",
  "theme-text-light": "#f2f3f5",
  "theme-typewriter": "#ffffffb3",
  "theme-shadow": "0 0.125rem 0.25rem rgb(255 255 255 / 4%)",
  "theme-icons": "#fff",
  "theme-icons-th": "#1a1a1a",
  "theme-btn-base": "#f2f3f5",
  "theme-btn-txt": "#f2f3f5",
  "theme-footer": "#1b1e20",
  "theme-shadowModal": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
  "theme-outlineModal": "rgba(255, 255, 255, 0.24)",
  "theme-shadowCard": "rgba(255, 255, 255, 0.85)",
};
const themeLight = {
  "theme-bg": "#fff",
  "theme-txt": "#272829",
  "theme-title": "#45505b",
  "theme-text-light": "#45505b",
  "theme-typewriter": "#0563bb",
  "theme-shadow": "0 0.125rem 0.25rem rgb(0 0 0 / 4%)",
  "theme-icons": "#212428",
  "theme-icons-th": "#fff",
  "theme-btn-base": "#0563bb",
  "theme-btn-txt": "#0563bb",
  "theme-footer": "#F7F8F9",
  "theme-shadowModal": "10px 10px 19px #1c1e2224, -10px -10px 19px #262a2e1c",
  "theme-outlineModal": "rgba(0, 0, 0, 0.24)",
  "theme-shadowCard": "rgba(0, 0, 0, 0.42)",
};

// DOM HTML
const $html = document.documentElement;

function NavBar() {
  const { item: darkTheme, handleItem: setDarkTheme } = useLocalStorage(
    "theme-dark",
    {
      state: true,
    }
  );
  const [showNav, setShowNav] = useState<boolean>(false);
  const [navItems, setNavItems] = useState<INavItem[]>(items);
  const scrollspy: string = useScrollSpy();

  const refCheckBox = useRef<HTMLInputElement>(null);

  const handleActiveItem = (id: number): void => {
    const obj: INavItem[] = navItems.map((item) => {
      item.state = false;
      return item;
    });
    obj[id - 1].state = true;
    setShowNav(false);
    setNavItems(obj);
    $html.classList.remove("disabled");
  };

  const handleChangeTheme = (): void =>
    setDarkTheme({ state: !darkTheme.state });

  const handleClickShowNav = () => {
    setShowNav((prev) => {
      const state = !prev;
      state
        ? $html.classList.add("disabled")
        : $html.classList.remove("disabled");
      return state;
    });
  };

  useEffect(() => {
    const index: number = navItems.findIndex((item) => item.hash === scrollspy);
    if (index >= 0) handleActiveItem(index + 1);
  }, [scrollspy]);

  useEffect(() => {
    refCheckBox.current!.checked = darkTheme.state;
  }, [darkTheme]);

  darkTheme.state ? useTheme(themeDark) : useTheme(themeLight);

  return (
    <>
      <nav className={`${scss.NavBar} ${showNav ? scss.NavBarActive : ""}`}>
        <ul className={scss.NavBarList}>
          {navItems.map((item: INavItem) => (
            <NavBarItem
              {...item}
              key={item.id}
              handleActiveItem={(id: number) => handleActiveItem(id)}
            />
          ))}
        </ul>
      </nav>

      <div className={scss.Menu}>
        <div className="ms-auto">
          <ul className={scss.MenuList}>
            <li className={`${scss.MenuItem} pe-lg-3`}>
              <button className={scss.MenuBtn}>
                <label className={scss.MenuSwitch}>
                  <input
                    ref={refCheckBox}
                    type="checkbox"
                    className={scss.MenuCheckbox}
                    onChange={handleChangeTheme}
                  />
                  <span className={scss.MenuSlider}>
                    <Icon
                      icon={darkTheme.state ? "bx:moon" : "bx:sun"}
                      className={scss.MenuIcontheme}
                    />
                  </span>
                </label>
              </button>
            </li>
            <li className={`${scss.MenuItem} d-lg-none`}>
              <button
                className={scss.MenuBtn}
                onClick={handleClickShowNav}
                style={{ position: "relative", zIndex: "999" }}>
                <Icon
                  icon={showNav ? "ep:close-bold" : "bx:menu"}
                  className={scss.MenuBar}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export { NavBar };
