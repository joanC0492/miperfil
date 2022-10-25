import { Irrss } from "@/interfaces/rrss.interface";
import { Icon } from "@iconify/react";
import scss from "@/scss/components/Rrss.module.scss";

const rrssItems: Irrss[] = [
  {
    id: 1,
    name: "linkedin",
    link: "https://www.linkedin.com/in/joancochachi04/",
    icon: "bxl:linkedin",
  },
  {
    id: 2,
    name: "github",
    link: "https://github.com/joanC0492",
    icon: "bxl:github",
  },
  {
    id: 3,
    name: "whatsapp",
    link: "https://wa.me/+51900556665?text=Hola%20te%20contacto%20desde%20joancochachi.com",
    icon: "bxl:whatsapp",
  },
];

function Rrss() {
  return (
    <ul className={`${scss.Rrss} d-block`}>
      {rrssItems.map((rrss: Irrss) => (
        <li className={`${scss.RrssItem} d-inline-block`} key={rrss.id}>
          <a
            href={rrss.link}
            title={rrss.name}
            className={scss.RrssLink}
            target="_blank">
            <Icon icon={`${rrss.icon}`} className={scss.RrssIcon} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export { Rrss };
