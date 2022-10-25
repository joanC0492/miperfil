import scss from "@/scss/components/Habilidades.module.scss";

interface IHabilidad {
  id: number;
  text: string;
  value: number;
}

const habilidades: IHabilidad[] = [
  {
    id: 1,
    text: `HTML &amp; CSS`,
    value: 90,
  },
  {
    id: 2,
    text: `SASS`,
    value: 75,
  },
  {
    id: 3,
    text: `FIGMA`,
    value: 50,
  },
  {
    id: 4,
    text: `JAVASCRIPT`,
    value: 75,
  },
  {
    id: 5,
    text: `GIT`,
    value: 65,
  },
  {
    id: 6,
    text: `PHP`,
    value: 60,
  },
  {
    id: 7,
    text: `WORDPRESS/CMS`,
    value: 60,
  },
  {
    id: 8,
    text: `MYSQL`,
    value: 55,
  },
];

export const Habilidades = () => {
  return (
    <div className="Habilidades pt-4 pt-lg-0">
      <div className="mb-4">
        <h3 className={scss.Habilidades__title}>Habilidades</h3>
      </div>
      <div className="d-lg-flex flex-lg-wrap">
        {habilidades.map((habilidad: IHabilidad) => (
          <div className={scss.Habilidades__content} key={habilidad.id}>
            <span className={scss.Habilidades__skill}>
              <span
                dangerouslySetInnerHTML={{ __html: habilidad.text }}
                className={scss.Habilidades__span}
              />
              <span className={scss.Habilidades__val}>{habilidad.value}%</span>
            </span>
            <div className={`${scss.Habilidades__progress} progress`}>
              <div
                className={scss.Habilidades__progress_bar}
                role="progressbar"
                aria-valuenow={habilidad.value}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${habilidad.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
