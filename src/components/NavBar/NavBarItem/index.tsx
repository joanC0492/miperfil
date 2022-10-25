import { Icon } from "@iconify/react";
import { INavItem } from "@/interfaces/NavBar.interface";
import scss from "@/scss/components/NavBar.module.scss";

const NavBarItem: React.FC<INavItem> = ({
  id,
  name,
  icon,
  hash,
  state,
  handleActiveItem,
}) => {
  
  const handleItemClick = (id: number) => {
    if (!handleActiveItem) return;
    handleActiveItem(id);
  };

  return (
    <li className={scss.NavBarItem}>
      <a
        href={`#${hash}`}
        className={`${scss.NavBarLink} ${state ? scss.NavBarLinkActive : ""}`}
        onClick={() => handleItemClick(id)}>
        <Icon icon={icon} className={scss.NavBarIcon} />
        <span className={scss.NavBarTxt}>{name}</span>
      </a>
    </li>
  );
};

export { NavBarItem };
