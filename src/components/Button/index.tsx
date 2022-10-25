import scss from "@/scss/components/Button.module.scss";
interface Props {
  link: string;
  text: string;
}
const Button = ({ link, text }: Props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={link}
      className={scss.Button}>
      <div className={scss.ButtonContent}>
        <span className={scss.ButtonBg}></span>
        <span className={scss.ButtonBase}></span>
        <span className={scss.ButtonText}>{text}</span>
      </div>
    </a>
  );
};

export { Button };
